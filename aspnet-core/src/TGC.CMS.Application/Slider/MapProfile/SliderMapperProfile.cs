using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Slider.Dto;

namespace TGC.CMS.Slider.MapProfile
{
  public class SliderMapperProfile:Profile
  {
    public SliderMapperProfile()
    {
      CreateMap<SliderDto,MainSlider>();
      CreateMap<CreateSliderDto,MainSlider>();
    }
  }
}
