using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;
using TGC.CMS.Slider.Dto;

namespace TGC.CMS.Slider
{
  public interface ISliderAppService : IAsyncCrudAppService<SliderDto, int, PagedSliderResultRequestDto, CreateSliderDto, SliderDto>
  {
  }
}
