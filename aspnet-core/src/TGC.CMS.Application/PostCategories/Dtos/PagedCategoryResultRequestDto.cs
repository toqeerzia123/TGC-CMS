using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.PostCategories.Dtos
{
    public class PagedCategoryResultRequestDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }
        public bool? IsActive { get; set; }
    }
}
