using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
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
