using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;
using TGC.CMS.CMS_Post;
using Abp.Application.Services;
using Microsoft.AspNetCore.Hosting;
using TGC.CMS.Slider.Dto;
using Microsoft.Extensions.Configuration;
using TGC.CMS.Helper.Extensions;
using TGC.CMS.Authorization.Users;
using TGC.CMS.Users.Dto;
using Microsoft.EntityFrameworkCore;

namespace TGC.CMS.Slider
{
  public class SliderAppService :AsyncCrudAppService<MainSlider,SliderDto, int, PagedSliderResultRequestDto, CreateSliderDto, UpdateSliderDto>, ISliderAppService
  {
    private IWebHostEnvironment _environment;
    private readonly IRepository<PostImage, int> _ImageRepository;
    private readonly IUnitOfWorkManager _unitOfWorkManager;
    private readonly IConfiguration _configuration;
    public SliderAppService(IUnitOfWorkManager unitOfWorkManager,
                          IRepository<MainSlider, int> repository,
                          IWebHostEnvironment environment,
                          IConfiguration configuration) : base(repository)
    {
      _environment = environment;
      _unitOfWorkManager = unitOfWorkManager;
      _configuration = configuration;
    }
    protected override IQueryable<MainSlider> ApplySorting(IQueryable<MainSlider> query, PagedSliderResultRequestDto input)
    {
      
      return query.OrderBy(r => r.OrderNO);
    }
    public override async Task<SliderDto> UpdateAsync([FromForm] UpdateSliderDto input)
    {
      var slider = await Repository.GetAllIncluding(x => x.Id == input.Id).FirstOrDefaultAsync();
      if (input.Image != null && input.Image.Length > 0)
      {
        string uploads = Path.Combine(_environment.WebRootPath, "Content\\SliderImages");

        var Filename = DateTime.Now.ToString("yyyyMMddHHmmssfff").ToString() + "_" + input.Image.FileName;
        var filePath = Path.Combine(uploads, Filename);

        using (var fileStream = new FileStream(filePath, FileMode.Create))
        {
          input.Image.CopyTo(fileStream);
        }
        slider.ImagePath = Filename;
      }


      CheckCreatePermission();
      slider.CreationTime = DateTime.Now;
      slider.IsDeleted = false;
      await Repository.InsertAsync(slider);
      return MapToEntityDto(slider);

    }
    public override async Task<SliderDto> CreateAsync([FromForm] CreateSliderDto input)
    {

        if (input.Image != null && input.Image.Length > 0)
        {
          string uploads = Path.Combine(_environment.WebRootPath, "Content\\SliderImages");

        var Filename = DateTime.Now.ToString("yyyyMMddHHmmssfff").ToString() + "_" + input.Image.FileName;
        var filePath = Path.Combine(uploads, Filename);

        using (var fileStream = new FileStream(filePath, FileMode.Create))
            {
              input.Image.CopyTo(fileStream);
            }
            input.ImagePath = Filename;
        }

        var model = ObjectMapper.Map<MainSlider>(input);
        CheckCreatePermission();
        model.CreationTime = DateTime.Now;
        model.IsDeleted = false;
        await Repository.InsertAsync(model);
        return MapToEntityDto(model);
      
      }
   
    }

  
}
