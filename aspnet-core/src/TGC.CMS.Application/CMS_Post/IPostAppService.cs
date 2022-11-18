﻿using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;

namespace TGC.CMS.CMS_Post
{
    public interface IPostAppService : IAsyncCrudAppService<PostDto, int, PagedPostResultRequestDto, CreatePostDto, PostDto>
    {
        object GetAllPostsByCategory(PagedPostResultRequestDto input);
       Task<object> CreatePost([FromForm] CreatePostDto input);
        Task<object> UpdatePost([FromForm] CreatePostDto input);
    }
}
