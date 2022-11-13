using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.PostCategories.Dtos;

namespace TGC.CMS.PostCategories
{
    public interface IPostCategoryAppService : IAsyncCrudAppService<CategoryDto, int, PagedCategoryResultRequestDto, CreateCategoryDto, CategoryDto>
    {
    }
}
