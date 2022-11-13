using Abp.Application.Services;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post;
using TGC.CMS.PostDetailss.Dtos;

namespace TGC.CMS.PostDetailss
{
    public class PostDetailAppService : AsyncCrudAppService<PostDetail, PostDetailDto, int, PagedPostDetailResultRequestDto, CreatePostDetailDto, PostDetailDto>
    {
        public PostDetailAppService(IRepository<PostDetail, int> repository) : base(repository)
        {
        }
    }
}
