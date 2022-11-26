using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Slider.Dto;
using TGC.CMS.Slider;
using TGC.CMS.Promotions.Dtos;
using TGC.CMS.PromotionalText;

namespace TGC.CMS.Promotions.Mapperprofile
{
  public class PromotionMapperProfile:Profile
  {
    public PromotionMapperProfile()
    {
      CreateMap<Promotiondto, Promotion>();
      CreateMap<CreatePromotionDto, Promotion>();
    }
  }
}
