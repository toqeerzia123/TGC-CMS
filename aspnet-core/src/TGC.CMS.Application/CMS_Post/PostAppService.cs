using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.Extensions;
using Microsoft.AspNetCore.Hosting;
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

namespace TGC.CMS.CMS_Post
{
    public class PostAppService : AsyncCrudAppService<Post, PostDto, int, PagedPostResultRequestDto, CreatePostDto, UpdatePostDto>, IPostAppService
    {
        private IWebHostEnvironment _environment;
        private readonly IRepository<PostImage, int> _ImageRepository;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        private readonly IConfiguration _configuration;
        public PostAppService(IUnitOfWorkManager unitOfWorkManager,
                              IRepository<Post, int> repository,
                              IRepository<PostImage, int> ImageRepository,
                              IWebHostEnvironment environment,
                              IConfiguration configuration) : base(repository)
        {
            _environment = environment;
            _ImageRepository = ImageRepository;
            _unitOfWorkManager = unitOfWorkManager;
            _configuration = configuration;
        }

        #region Post Crud APIS

        public override async Task<PostDto> CreateAsync([FromForm] CreatePostDto input)
        {

            #region PostDto to Entity Mapping

            var model = ObjectMapper.Map<Post>(input);
            CheckCreatePermission();
            model.CreationTime = DateTime.Now;
            model.IsDeleted = false;

            #endregion

            #region Storing PostImages into directory and Create a localList
            if (input.PostImages != null && input.PostImages.Count > 0)
            {
                string uploads = Path.Combine(_environment.WebRootPath, "PostImages");
                model.PostImages = input.PostImages.SaveFile(uploads);
            }

            #endregion

            #region SaveFinal Changes to database

            await Repository.InsertAsync(model);
            _unitOfWorkManager.Current.SaveChanges();

            #endregion

            return new PostDto() { Id = model.Id, Title = model.Title };
        }
        public override async Task<PostDto> UpdateAsync([FromForm] UpdatePostDto input)
        {
            var post = Repository.GetAllIncluding(x => x.PostImages)
                .Where(c => c.Id == input.Id).FirstOrDefault();
            CheckCreatePermission();

            #region Update PostEntity with Dto

            post.Title = input.Title;
            post.Description = input.Description;
            post.PostDate = input.PostDate;
            post.CategoryId = input.CategoryId;
            post.DisplayOrderNo = input.DisplayOrderNo;
            post.LastModificationTime = DateTime.Now;
            post.Amount = input.Amount;
            post.Elimination = input.Elimination;
            post.Prize = input.Prize;

            #endregion

            #region Remove PostImages from database

            if (post.PostImages != null && post.PostImages.Count > 0)
            {
                foreach (PostImage postImage in post.PostImages)
                {
                    await _ImageRepository.DeleteAsync(postImage);
                    _unitOfWorkManager.Current.SaveChanges();
                }
            }

            #endregion

            #region Store Updated PostImages into directory and Create a localList
            if (input.PostImages != null && input.PostImages.Count > 0)
            {
                string uploads = Path.Combine(_environment.WebRootPath, "PostImages");
                post.PostImages = input.PostImages.SaveFile(uploads);
            }
            #endregion

            await Repository.UpdateAsync(post);
            _unitOfWorkManager.Current.SaveChanges();
            return new PostDto() { Id = post.Id, Title = post.Title };
        }
        public override Task<PagedResultDto<PostDto>> GetAllAsync(PagedPostResultRequestDto input)
        {
            string imgBaseUrl = _configuration["Content:PostImagesPath"].ToString();

            var allIncludes = Repository.GetAllIncluding(x => x.PostImages)
                                        .Where(v => v.CategoryId == input.PostType)
                                        .OrderByDescending(x => x.PostDate)
                                        .AsQueryable();

            IQueryable<Post> paginatedResult = ApplyPaging(allIncludes, input);

            var dtoList = ObjectMapper.Map<List<PostDto>>(paginatedResult);

            dtoList.ForEach(x =>
            {
                x.PostImages = x.PostImages.Select(v => new PostImageDto
                {
                    ImageUrl = imgBaseUrl + v.ImageUrl,
                    IsPrimaryImage = v.IsPrimaryImage
                }).ToList();
            });

            PagedResultDto<PostDto> pagedResultDto = new PagedResultDto<PostDto>(allIncludes.Count(), dtoList);
            return Task.FromResult<PagedResultDto<PostDto>>(pagedResultDto);
        }
        public override async Task<PostDto> GetAsync(EntityDto<int> input)
        {
            var singlePost = await Repository.GetAllIncluding(x => x.PostImages).Where(v => v.Id == input.Id).FirstOrDefaultAsync();
            if (singlePost != null)
            {
                string imgBaseUrl = _configuration["Content:PostImagesPath"].ToString();

                var post = ObjectMapper.Map<PostDto>(singlePost);

                post.PostImages.ToList().ForEach(x => x.ImageUrl = imgBaseUrl + x.ImageUrl);

                return post;
            }
            else
            {
                return new PostDto();
            }

        }

        //public async Task<List<PostDto>> GetAllPostsByCategory(PagedPostResultRequestDto input)
        //{
        //    var posts = Repository.GetAll()
        //                          .Include(v => v.PostImages)
        //                          .Where(b => b.CategoryId == input.PostType)
        //                          .OrderByDescending(c => c.PostDate)
        //                          .ToList();

        //    var postDtos = posts.Take(10).Select(c => new PostDto
        //    {
        //        Id = c.Id,
        //        Description = c.Description,
        //        PostDate = c.PostDate,
        //        Title = c.Title,
        //        Image = c.PostImages.GetPrimaryImage(),
        //        Amount = c.Amount,
        //        Elimination = c.Elimination,
        //        Prize = c.Prize
        //    }).ToList();
        //    return postDtos;
        //}

        #endregion

    }

    public static class PostImagesExtension
    {
        public static string GetPrimaryImage(this ICollection<PostImage> images)
        {
            string imagePath = string.Empty;

            PostImage single = images.Where(z => z.IsPrimaryImage == true).FirstOrDefault();
            if (single != null)
            {
                imagePath = single.ImageUrl;
            }
            return imagePath;
        }
    }
}
