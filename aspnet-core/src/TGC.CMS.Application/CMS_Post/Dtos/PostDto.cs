using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
namespace TGC.CMS.CMS_Post.Dtos
{
    [AutoMapTo(typeof(Post))]
    public class PostDto : EntityDto<long>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime PostDate { get; set; }
        public int CategoryId { get; set; }
        public int DisplayOrderNo { get; set; }
    }
}
