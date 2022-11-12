using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.CMS_Post.Dtos
{
    public class PostMapProfile:Profile
    {
        public PostMapProfile()
        {
            CreateMap<PostDto, Post>();
            CreateMap<CreatePostDto, Post>();
        }
    }
}
