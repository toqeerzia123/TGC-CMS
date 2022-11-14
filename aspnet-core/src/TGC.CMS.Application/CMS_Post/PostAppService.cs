using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;

namespace TGC.CMS.CMS_Post
{
    public class PostAppService : AsyncCrudAppService<Post, PostDto, int, PagedPostResultRequestDto, CreatePostDto, PostDto>, IPostAppService
    {
        public PostAppService(IRepository<Post, int> repository) : base(repository)
        {
        }

        public object GetAllPostsByCategory(PagedPostResultRequestDto input)
        {
            var posts = Repository.GetAll().Include(v => v.PostDetail)
                                  .Include(v => v.PostImages)
                                  .Where(b => b.CategoryId == input.PostType)
                                  .OrderByDescending(c => c.PostDate)
                                  .ToList();

            var postDtos = posts.Take(10).Select(c => new
            {
                Id = c.Id,
                Description = c.Description,
                PostDate = c.PostDate,
                Title = c.Title,
                Image = c.PostImages.GetPrimaryImage(),
                Amount = c.PostDetail?.Amount,
                Elimination = c.PostDetail?.Elimination,
                Prize = c.PostDetail?.Prize
            }).ToList();
            return postDtos;
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
