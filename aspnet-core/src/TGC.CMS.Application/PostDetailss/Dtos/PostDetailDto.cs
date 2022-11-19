using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using TGC.CMS.CMS_Post;

namespace TGC.CMS.PostDetailss.Dtos
{
    [AutoMapFrom(typeof(PostDetail))]
    public class PostDetailDto : EntityDto<int>
    {
        public string Prize { get; set; }
        public int? Amount { get; set; }
        public string Elimination { get; set; }
        public int PostId { get; set; }
    }
}
