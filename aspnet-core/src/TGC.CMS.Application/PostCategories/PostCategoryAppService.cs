using Abp.Application.Services;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post;
using TGC.CMS.PostCategories.Dtos;

namespace TGC.CMS.PostCategories
{
    public class PostCategoryAppService : AsyncCrudAppService<PostCategory, CategoryDto, int, PagedCategoryResultRequestDto, CreateCategoryDto, CategoryDto>, IPostCategoryAppService
    {
        public PostCategoryAppService(IRepository<PostCategory, int> repository) : base(repository)
        {
        }
    }
}
