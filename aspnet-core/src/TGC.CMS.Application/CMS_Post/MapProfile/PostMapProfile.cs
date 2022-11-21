using AutoMapper;
using Microsoft.Extensions.Configuration;
using System.Linq;
using TGC.CMS.CMS_Post.Dtos;

namespace TGC.CMS.CMS_Post.MapProfile
{
    public class PostMapProfile : Profile
    {
        public PostMapProfile()
        {
            CreateMap<CreatePostDto, Post>()
                .ForMember(opt => opt.PostImages, x => x.Ignore());

            CreateMap<PostDto, Post>();

            //CreateMap<Post, PostDto>()
            //.ForMember(opt => opt.PostImages, x => x.MapFrom(b => b.PostImages.Select(c => new PostImageDto
            //{
            //    ImageUrl = postImagesBasePath + c.ImageUrl,
            //    IsPrimaryImage = c.IsPrimaryImage,
            //})));
        }
    }
}
