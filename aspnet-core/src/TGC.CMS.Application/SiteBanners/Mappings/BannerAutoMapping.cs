using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Publicity.Dtos;
using TGC.CMS.Publicity;
using TGC.CMS.SiteBanners.Dto;

namespace TGC.CMS.SiteBanners.Mappings
{
    public class BannerAutoMapping : Profile
    {
        public BannerAutoMapping()
        {
            CreateMap<BannerCreateDto, Banners>();

            CreateMap<Banners, BannerListDto>();
        }
    }
}
