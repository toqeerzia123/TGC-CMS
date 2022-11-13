using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post;

namespace TGC.CMS.PostCategories.Dtos
{
    [AutoMapFrom(typeof(PostCategory))]
    public class CategoryDto : EntityDto<int>
    {
        public string CategoryName { get; set; }
    }
}
