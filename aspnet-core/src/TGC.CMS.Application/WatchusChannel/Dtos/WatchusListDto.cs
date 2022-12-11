using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post;

namespace TGC.CMS.WatchusChannel.Dtos
{
    [AutoMapFrom(typeof(WatchUs))]
    public class WatchusListDto : EntityDto<int>
    {
        public string Title { get; set; }
        public string LogoIcon { get; set; }
        public string ChannelType { get; set; }
        public string ChannelUrl { get; set; }
    }
}
