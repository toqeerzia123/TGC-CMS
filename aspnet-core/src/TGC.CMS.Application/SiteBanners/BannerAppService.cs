using Abp.Application.Services.Dto;
using Abp.Application.Services;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using AutoMapper;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Publicity.Dtos;
using TGC.CMS.Publicity;
using TGC.CMS.SiteBanners.Dto;
using Microsoft.Extensions.Configuration;
using TGC.CMS.Helper.Extensions;
using Microsoft.EntityFrameworkCore;

namespace TGC.CMS.SiteBanners
{
    public class BannerAppService : AsyncCrudAppService<Banners, BannerListDto, int, BannerResultRequestDto, BannerCreateDto, BannerUpdateDto>, IBannerAppService
    {
        private IWebHostEnvironment _environment;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IConfiguration _configuration;
        public BannerAppService(IUnitOfWorkManager unitOfWorkManager,
                              IRepository<Banners, int> repository,
                              IWebHostEnvironment environment,
                              IConfiguration configuration) : base(repository)
        {
            _environment = environment;
            _unitOfWorkManager = unitOfWorkManager;
            _configuration = configuration;
        }

        #region Post Crud APIS

        public override async Task<BannerListDto> CreateAsync([FromForm] BannerCreateDto input)
        {
            try
            {
                #region PostDto to Entity Mapping

                var model = ObjectMapper.Map<Banners>(input);
                model.CreationTime = DateTime.Now;
                model.IsDeleted = false;

                #endregion

                #region Storing PostImages into directory and Create a localList
                if (input.Image != null)
                {
                    string uploads = Path.Combine(_environment.WebRootPath, "banners");
                    List<IFormFile> formFiles = new List<IFormFile>();
                    formFiles.Add(input.Image);
                    model.Image = formFiles.SaveFile(uploads).FirstOrDefault()?.ImageUrl;
                }

                #endregion

                #region SaveFinal Changes to database

                await Repository.InsertAsync(model);
                _unitOfWorkManager.Current.SaveChanges();
                return new BannerListDto() { Id = model.Id, FavouriteGameTitle = model.FavouriteGameTitle };
                #endregion
            }
            catch (Exception ex)
            {
                return new BannerListDto() { Id = 0, FavouriteGameTitle = String.Empty };
            }
        }
        public override async Task<BannerListDto> UpdateAsync([FromForm] BannerUpdateDto input)
        {
            try
            {
                var post = Repository.GetAll()
                .Where(c => c.Id == input.Id).FirstOrDefault();

                #region Update PostEntity with Dto

                if (input.Image != null)
                {
                    string uploads = Path.Combine(_environment.WebRootPath, "banners");
                    List<IFormFile> formFiles = new List<IFormFile>();
                    formFiles.Add(input.Image);
                    post.Image = formFiles.SaveFile(uploads).FirstOrDefault()?.ImageUrl;
                }

                post.FavouriteGameTitle = input.FavouriteGameTitle;
                post.HTW_TitleOne= input.HTW_TitleOne;
                post.HTW_TitleTwo= input.HTW_TitleTwo;
                post.HTW_TitleThree = input.HTW_TitleThree;
                post.HTW_DescriptionOne=input.HTW_DescriptionOne;
                post.HTW_DescriptionTwo=input.HTW_DescriptionTwo;
                post.HTW_DescriptionThree= input.HTW_DescriptionThree;
                post.FavouriteGameDecription= input.FavouriteGameDecription;


                post.LastModificationTime = DateTime.UtcNow;

                #endregion

                await Repository.UpdateAsync(post);
                _unitOfWorkManager.Current.SaveChanges();
                return new BannerListDto() { Id = post.Id, FavouriteGameTitle = post.FavouriteGameTitle };
            }
            catch (Exception ex)
            {
                return new BannerListDto() { Id = 0, FavouriteGameTitle = "" };
            }

        }
        public override Task<PagedResultDto<BannerListDto>> GetAllAsync(BannerResultRequestDto input)
        {
            //string imgBaseUrl = _configuration["Content:PostImagesPath"].ToString();

            var allIncludes = Repository.GetAll()
                                        .Where(c => c.BannerId.Contains(input.BannerId))
                                        .OrderByDescending(x => x.CreationTime)
                                        .AsQueryable();

            IQueryable<Banners> paginatedResult = ApplyPaging(allIncludes, input);

            var dtoList = ObjectMapper.Map<List<BannerListDto>>(paginatedResult);

            //dtoList.ForEach(x =>
            //{
            //    x.PostImages = x.PostImages.Select(v => new PostImageDto
            //    {
            //        ImageUrl = imgBaseUrl + v.ImageUrl,
            //        IsPrimaryImage = v.IsPrimaryImage
            //    }).ToList();
            //});

            PagedResultDto<BannerListDto> pagedResultDto = new PagedResultDto<BannerListDto>(allIncludes.Count(), dtoList);
            return Task.FromResult<PagedResultDto<BannerListDto>>(pagedResultDto);
        }
        public override async Task<BannerListDto> GetAsync(EntityDto<int> input)
        {
            var singlePost = await Repository.GetAll().Where(v => v.Id == input.Id).FirstOrDefaultAsync();
            if (singlePost != null)
            {
                //string imgBaseUrl = _configuration["Content:PostImagesPath"].ToString();

                var post = ObjectMapper.Map<BannerListDto>(singlePost);

                //post.PostImages.ToList().ForEach(x => x.ImageUrl = imgBaseUrl + x.ImageUrl);

                return post;
            }
            else
            {
                return new BannerListDto();
            }

        }
        #endregion

    }
}
