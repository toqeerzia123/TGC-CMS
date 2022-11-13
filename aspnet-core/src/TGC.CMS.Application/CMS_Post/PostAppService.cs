using Abp.Application.Services;
using Abp.Domain.Repositories;
using TGC.CMS.CMS_Post.Dtos;

namespace TGC.CMS.CMS_Post
{
    public class PostAppService : AsyncCrudAppService<Post, PostDto, int, PagedPostResultRequestDto, CreatePostDto, PostDto>, IPostAppService
    {
        public PostAppService(IRepository<Post, int> repository) : base(repository)
        {
        }
    }
}
