using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.Publicity.Dtos
{
    public class AdvertListDto : EntityDto<int>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string ChannelUrl { get; set; }
        public string Icon { get; set; }
    }
}
