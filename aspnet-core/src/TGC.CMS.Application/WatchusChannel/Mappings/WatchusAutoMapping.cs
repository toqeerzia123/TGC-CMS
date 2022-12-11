using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;
using TGC.CMS.CMS_Post;
using TGC.CMS.WatchusChannel.Dtos;

namespace TGC.CMS.WatchusChannel.Mappings
{
    public class WatchusAutoMapping : Profile
    {
        public WatchusAutoMapping()
        {
            CreateMap<WatchusCreateDto, WatchUs>();

            CreateMap<WatchUs, WatchusListDto>();
        }
    }
}
