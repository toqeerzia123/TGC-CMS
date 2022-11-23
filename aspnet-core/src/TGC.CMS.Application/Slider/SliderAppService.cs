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

namespace TGC.CMS.Slider
{
  public class SliderAppService :AsyncCrudAppService<MainSlider,SliderDto, int, PagedSliderResultRequestDto, CreateSliderDto, SliderDto>, ISliderAppService
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
            input.ImagePath = filePath;
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
