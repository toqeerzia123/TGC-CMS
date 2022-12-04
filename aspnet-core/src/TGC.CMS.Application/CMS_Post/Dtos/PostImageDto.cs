
using Abp.AutoMapper;

namespace TGC.CMS.CMS_Post.Dtos
{
    [AutoMapFrom(typeof(PostImage))]
    public class PostImageDto
    {
        public int Id { get; set; }
        public string ImageUrl { get; set; }
        public bool IsPrimaryImage { get; set; }
    }
}
