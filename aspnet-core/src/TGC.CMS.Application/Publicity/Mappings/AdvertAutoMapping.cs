using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.WatchusChannel.Dtos;
using TGC.CMS.WatchusChannel;
using TGC.CMS.Publicity.Dtos;

namespace TGC.CMS.Publicity.Mappings
{
    public class AdvertAutoMapping : Profile
    {
        public AdvertAutoMapping()
        {
            CreateMap<AdvertCreateDto, Advertisement>();

            CreateMap<Advertisement, AdvertListDto>();
        }
    }
}
