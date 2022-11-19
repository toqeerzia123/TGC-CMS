using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;

namespace TGC.CMS.CMS_Post
{
    public interface IPostAppService : IAsyncCrudAppService<PostDto, int, PagedPostResultRequestDto, CreatePostDto, PostDto>
    {
       Task<List<PostDto>> GetAllPostsByCategory(PagedPostResultRequestDto input);
       Task<PagedResultDto<PostDto>> GetAllTest2Async(PagedPostResultRequestDto input);
       Task<object> CreatePost([FromForm] CreatePostDto input);
        Task<object> UpdatePost([FromForm] CreatePostDto input);
    }
}
