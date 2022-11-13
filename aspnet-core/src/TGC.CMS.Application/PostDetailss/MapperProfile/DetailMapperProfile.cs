using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post;
using TGC.CMS.PostCategories.Dtos;
using TGC.CMS.PostDetailss.Dtos;

namespace TGC.CMS.PostDetailss.MapperProfile
{
    public class DetailMapperProfile:Profile
    {
        public DetailMapperProfile()
        {
            CreateMap<CreatePostDetailDto, PostDetail>();
            CreateMap<PostDetailDto, PostDetail>();
        }
    }
}
