using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;
using TGC.CMS.PostDetailss.Dtos;

namespace TGC.CMS.CMS_Post.MapProfile
{
    public class PostMapProfile:Profile
    {
        public PostMapProfile()
        {
            CreateMap<CreatePostDto, Post>();
            CreateMap<PostDto, Post>();
            CreateMap<PostDetailDto, PostDetail>();
        }
    }
}
