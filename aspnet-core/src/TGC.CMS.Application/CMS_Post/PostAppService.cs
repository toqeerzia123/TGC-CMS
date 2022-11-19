using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Abp.Extensions;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;

namespace TGC.CMS.CMS_Post
{
    public class PostAppService : AsyncCrudAppService<Post, PostDto, int, PagedPostResultRequestDto, CreatePostDto, PostDto>, IPostAppService
    {
        private IHostingEnvironment _environment;
        private readonly IRepository<PostImage, int> _ImageRepository;
        private readonly IRepository<PostDetail> _DetailRepository;
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public PostAppService(IUnitOfWorkManager unitOfWorkManager, IRepository<Post, int> repository, IRepository<PostImage, int> ImageRepository, IRepository<PostDetail> DetailRepository, IHostingEnvironment environment) : base(repository)
        {
            _environment = environment;
            _ImageRepository = ImageRepository;
            _DetailRepository = DetailRepository;
            _unitOfWorkManager = unitOfWorkManager;
        }

        //public override Task<PagedResultDto<PostDto>> GetAllTest2Async(PagedPostResultRequestDto input)
        //{
        //    try
        //    {
        //        var allIncludes = Repository.GetAllIncluding(c => c.PostDetail);
        //        var dtoList = ObjectMapper.Map<List<PostDto>>(allIncludes);
        //        PagedResultDto<PostDto> pagedResultDto = new PagedResultDto<PostDto>(dtoList.Count, dtoList);
        //        return Task.FromResult<PagedResultDto<PostDto>>(pagedResultDto);
        //    }
        //    catch (Exception ex)
        //    {

        //    }

        //    return Task.FromResult<PagedResultDto<PostDto>>(new PagedResultDto<PostDto>());
        //}

        public async Task<object> CreatePost([FromForm] CreatePostDto input)
        {
   
            var model = ObjectMapper.Map<Post>(input);
            CheckCreatePermission();
            model.CreationTime = DateTime.Now;
            model.IsDeleted = false;
            await Repository.InsertAsync(model);
            _unitOfWorkManager.Current.SaveChanges();

            PostDetail postDetail = new PostDetail();
            postDetail.PostId = model.Id;
            postDetail.Prize = input.Prize;
            postDetail.Amount = input.Amount;
            postDetail.Elimination = input.Elimination;
            postDetail.CreationTime = DateTime.Now;
            postDetail.IsDeleted = false;
          await  _DetailRepository.InsertAsync(postDetail);

            foreach (var item in input.Image)
            {
                if (item.Length> 0)
                {
                    string uploads = Path.Combine(_environment.WebRootPath, "Content/PostImages");
                    var Filename = DateTime.Now.ToString("yyyyMMddHHmmssfff").ToString() + "_" + item.FileName;
                    var filePath = Path.Combine(uploads, Filename);
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        item.CopyTo(fileStream);
                    }
                    PostImage img = new PostImage();
                    img.ImageUrl = Filename;
                    img.PostId = model.Id;
                    img.IsPrimaryImage = true;
                    await _ImageRepository.InsertAsync(img);
                }
            }
            return postDetail;
        }

        public async Task<List<PostDto>> GetAllPostsByCategory(PagedPostResultRequestDto input)
        {
            var posts = Repository.GetAll().Include(v => v.PostDetail)
                                  .Include(v => v.PostImages)
                                  .Where(b => b.CategoryId == input.PostType)
                                  .OrderByDescending(c => c.PostDate)
                                  .ToList();

            var postDtos = posts.Take(10).Select(c => new PostDto
            {
                Id = c.Id,
                Description = c.Description,
                PostDate = c.PostDate,
                Title = c.Title,
                //Image = c.PostImages.GetPrimaryImage(),
                //Amount = c.PostDetail?.Amount,
                //Round = c.PostDetail?.Elimination,
                //Prize = c.PostDetail?.Prize
            }).ToList();
            return postDtos;
        }

        public Task<PagedResultDto<PostDto>> GetAllTest2Async(PagedPostResultRequestDto input)
        {
            try
            {
                var allIncludes = Repository.GetAllIncluding(c => c.PostDetail);
                var dtoList = ObjectMapper.Map<List<PostDto>>(allIncludes);
                PagedResultDto<PostDto> pagedResultDto = new PagedResultDto<PostDto>(dtoList.Count, dtoList);
                return Task.FromResult<PagedResultDto<PostDto>>(pagedResultDto);
            }
            catch (Exception ex)
            {

            }

            return Task.FromResult<PagedResultDto<PostDto>>(new PagedResultDto<PostDto>());
        public async Task<object> UpdatePost([FromForm] CreatePostDto input)
        {
    
            var Post =await Repository.GetAllIncluding(x => x.Id == input.PostId).SingleOrDefaultAsync();
            CheckCreatePermission();
            Post.Title=input.Title;
            Post.Description=input.Description;
            Post.PostDate=input.PostDate;
            Post.CategoryId=input.CategoryId;
            Post.DisplayOrderNo=input.DisplayOrderNo;
            Post.LastModificationTime=DateTime.Now;
             await Repository.UpdateAsync(Post);
            _unitOfWorkManager.Current.SaveChanges();

            var postdetail= await _DetailRepository.GetAllIncluding(x=>x.Id==input.PostDetailId).SingleOrDefaultAsync();            
            postdetail.Prize = input.Prize;
            postdetail.Amount = input.Amount;
            postdetail.Elimination = input.Elimination;
            postdetail.LastModificationTime = DateTime.Now;
            await  _DetailRepository.UpdateAsync(postdetail);

            foreach (var item in input.Image)
            {
                string uploads = Path.Combine(_environment.WebRootPath, "Content/PostImages");
                if (item.Length > 0)
                {
                    var Filename = DateTime.Now.ToString("yyyyMMddHHmmssfff").ToString() + "_" + item.FileName;
                    var filePath = Path.Combine(uploads, Filename);
                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        item.CopyTo(fileStream);
                    }
                    PostImage img = new PostImage();
                    img.ImageUrl = Filename;
                    img.PostId = Post.Id;
                    img.IsPrimaryImage = true;
                    await _ImageRepository.InsertAsync(img);
                }
            }
            return postdetail;
        }




        //public override Task<PagedResultDto<object>> GetAllAsync(PagedPostResultRequestDto input)
        //{

        //    var posts = Repository.GetAll().Include(v => v.PostDetail)
        //                          .Include(v => v.PostImages)
        //                          .Where(b => b.CategoryId == input.PostType)
        //                          .OrderByDescending(c => c.PostDate)
        //                          .ToList();

        //    var postDtos = posts.Select(c => new
        //    {
        //        Id = c.Id,
        //        Description = c.Description,
        //        PostDate = c.PostDate,
        //        Title = c.Title,
        //        Image = c.PostImages.GetPrimaryImage(),
        //        PostDetail = new
        //        {
        //            Amount = c.PostDetail?.Amount,
        //            Elimination = c.PostDetail?.Elimination,
        //            Prize = c.PostDetail?.Prize
        //        }
        //    }).ToList();
        //    Task<PagedResultDto<object>> a=new Task<PagedResultDto<object>>( new PagedResultDto<object>(10, postDtos);
        //    return base.GetAllAsync(input);
        //}
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
