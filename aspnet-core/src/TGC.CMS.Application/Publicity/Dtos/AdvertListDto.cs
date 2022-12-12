using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post;

namespace TGC.CMS.Publicity.Dtos
{
    [AutoMapFrom(typeof(Advertisement))]
    public class AdvertListDto : EntityDto<int>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string ChannelUrl { get; set; }
        public string Icon { get; set; }
    }
}
