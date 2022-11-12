using Abp.Application.Services;
using Abp.Domain.Repositories;
using TGC.CMS.CMS_Post.Dtos;

namespace TGC.CMS.CMS_Post
{
    public class PostAppService : AsyncCrudAppService<Post, PostDto, long, PagedPostResultRequestDto, CreatePostDto, PostDto>, IPostAppService
    {
        public PostAppService(IRepository<Post, long> repository) : base(repository)
        {
        }
    }
}
