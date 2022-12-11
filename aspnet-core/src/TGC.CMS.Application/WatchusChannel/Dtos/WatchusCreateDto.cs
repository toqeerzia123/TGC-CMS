using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;

namespace TGC.CMS.WatchusChannel.Dtos
{
    public class WatchusCreateDto
    {
        public string Title { get; set; }
        public string ChannelType { get; set; }
        public string ChannelUrl { get; set; }
    }

    public class WatchusUpdateDto : WatchusCreateDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
