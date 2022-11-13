using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.PostCategories.Dtos;
using TGC.CMS.PostDetailss.Dtos;

namespace TGC.CMS.PostDetailss
{
    public interface IPostDetailAppService : IAsyncCrudAppService<PostDetailDto, int, PagedPostDetailResultRequestDto, CreatePostDetailDto, PostDetailDto>
    {
    }
}
