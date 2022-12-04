using Abp.Application.Services;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;

namespace TGC.CMS.CMS_Post
{
    public interface IPostAppService : IAsyncCrudAppService<PostDto, int, PagedPostResultRequestDto, CreatePostDto, UpdatePostDto>
    {
        //Task<List<PostDto>> GetAllPostsByCategory(PagedPostResultRequestDto input);
    }
}
