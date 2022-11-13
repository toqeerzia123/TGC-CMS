using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;
using TGC.CMS.CMS_Post;
using TGC.CMS.PostCategories.Dtos;
using AutoMapper;

namespace TGC.CMS.PostCategories.MapProfile
{
    public class CategoryMapProfile:Profile
    {
        public CategoryMapProfile()
        {
            CreateMap<CreateCategoryDto, PostCategory>();
            CreateMap<CategoryDto, PostCategory>();
        }
    }
}
