using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.Extensions;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;
using TGC.CMS.Helper.Extensions;
using TGC.CMS.Publicity.Dtos;

namespace TGC.CMS.Publicity
{
    public class AdvertAppService : AsyncCrudAppService<Advertisement, AdvertListDto, int, AdvertResultRequestDto, AdvertCreateDto, AdvertUpdateDto>, IAdvertAppService
    {
        private IWebHostEnvironment _environment;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IConfiguration _configuration;
        public AdvertAppService(IUnitOfWorkManager unitOfWorkManager,
                              IRepository<Advertisement, int> repository,
                              IWebHostEnvironment environment,
                              IConfiguration configuration) : base(repository)
        {
            _environment = environment;
            _unitOfWorkManager = unitOfWorkManager;
            _configuration = configuration;
        }

        #region Post Crud APIS

        public override async Task<AdvertListDto> CreateAsync([FromForm] AdvertCreateDto input)
        {
            try
            {
                #region PostDto to Entity Mapping

                var model = ObjectMapper.Map<Advertisement>(input);
                model.CreationTime = DateTime.Now;
                model.IsDeleted = false;

                #endregion

                #region Storing PostImages into directory and Create a localList
                if (input.Image != null)
                {
                    string uploads = Path.Combine(_environment.WebRootPath, "publicity");
                    List<IFormFile> formFiles = new List<IFormFile>();
                    formFiles.Add(input.Image);
                    model.ImageUrl = formFiles.SaveFile(uploads).FirstOrDefault()?.ImageUrl;
                }

                #endregion

                #region SaveFinal Changes to database

                await Repository.InsertAsync(model);
                _unitOfWorkManager.Current.SaveChanges();
                return new AdvertListDto() { Id = model.Id, Title = model.Title };
                #endregion
            }
            catch (Exception ex)
            {
                return new AdvertListDto() { Id = 0, Title = String.Empty };
            }
        }
        public override async Task<AdvertListDto> UpdateAsync([FromForm] AdvertUpdateDto input)
        {
            try
            {
                var post = Repository.GetAll()
                .Where(c => c.Id == input.Id).FirstOrDefault();
                CheckCreatePermission();

                #region Update PostEntity with Dto

                if (input.Image != null)
                {
                    string uploads = Path.Combine(_environment.WebRootPath, "publicity");
                    List<IFormFile> formFiles = new List<IFormFile>();
                    formFiles.Add(input.Image);
                    post.ImageUrl = formFiles.SaveFile(uploads).FirstOrDefault()?.ImageUrl;
                }

                post.Title = input.Title;
                post.Description = input.Description;
                post.ChannelUrl = input.ChannelUrl;
                post.Icon = "";
                post.LastModificationTime = DateTime.UtcNow;

                #endregion

                await Repository.UpdateAsync(post);
                _unitOfWorkManager.Current.SaveChanges();
                return new AdvertListDto() { Id = post.Id, Title = post.Title };
            }
            catch (Exception ex)
            {
                return new AdvertListDto() { Id = 0, Title = "" };
            }

        }
        public override Task<PagedResultDto<AdvertListDto>> GetAllAsync(AdvertResultRequestDto input)
        {
            string imgBaseUrl = _configuration["Content:PostImagesPath"].ToString();

            var allIncludes = Repository.GetAll()
                                        .OrderByDescending(x => x.CreationTime)
                                        .AsQueryable();

            IQueryable<Advertisement> paginatedResult = ApplyPaging(allIncludes, input);

            var dtoList = ObjectMapper.Map<List<AdvertListDto>>(paginatedResult);

            //dtoList.ForEach(x =>
            //{
            //    x.PostImages = x.PostImages.Select(v => new PostImageDto
            //    {
            //        ImageUrl = imgBaseUrl + v.ImageUrl,
            //        IsPrimaryImage = v.IsPrimaryImage
            //    }).ToList();
            //});

            PagedResultDto<AdvertListDto> pagedResultDto = new PagedResultDto<AdvertListDto>(allIncludes.Count(), dtoList);
            return Task.FromResult<PagedResultDto<AdvertListDto>>(pagedResultDto);
        }
        public override async Task<AdvertListDto> GetAsync(EntityDto<int> input)
        {
            var singlePost = await Repository.GetAll().Where(v => v.Id == input.Id).FirstOrDefaultAsync();
            if (singlePost != null)
            {
                string imgBaseUrl = _configuration["Content:PostImagesPath"].ToString();

                var post = ObjectMapper.Map<AdvertListDto>(singlePost);

                //post.PostImages.ToList().ForEach(x => x.ImageUrl = imgBaseUrl + x.ImageUrl);

                return post;
            }
            else
            {
                return new AdvertListDto();
            }

        }
        #endregion

    }
}
