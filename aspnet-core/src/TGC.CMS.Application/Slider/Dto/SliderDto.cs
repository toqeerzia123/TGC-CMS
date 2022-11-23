using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post;

namespace TGC.CMS.Slider.Dto
{
  [AutoMapFrom(typeof(PostCategory))]
  public class SliderDto : EntityDto<int>
  {
    public string ImagePath { get; set; }
    public bool IsActive { get; set; }
    public int OrderNO { get; set; }

    public string Title { get; set; }
    public string Description { get; set; }
  }
}
