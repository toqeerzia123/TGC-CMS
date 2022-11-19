using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using TGC.CMS.PostDetailss.Dtos;

namespace TGC.CMS.CMS_Post.Dtos
{
    [AutoMapFrom(typeof(Post))]
    public class PostDto:EntityDto<int>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime PostDate { get; set; }
        public int DisplayOrderNo { get; set; }
        public PostDetailDto? PostDetail { get; set; }
    }
}
