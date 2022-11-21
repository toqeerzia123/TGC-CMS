
using Abp.AutoMapper;

namespace TGC.CMS.CMS_Post.Dtos
{
    [AutoMapFrom(typeof(PostImage))]
    public class PostImageDto
    {
        public string ImageUrl { get; set; }
        public bool IsPrimaryImage { get; set; }
    }
}
