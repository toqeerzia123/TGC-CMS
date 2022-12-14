using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;

namespace TGC.CMS.CMS_Post.Dtos
{
    [AutoMapFrom(typeof(Post))]
    public class PostDto : EntityDto<int>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime PostDate { get; set; }
        public string Image { get; set; }
        public string Prize { get; set; }
        public int? Amount { get; set; }
        public string Elimination { get; set; }
        public int DisplayOrderNo { get; set; }
        public List<PostImageDto> PostImages { get; set; }
    }
}
