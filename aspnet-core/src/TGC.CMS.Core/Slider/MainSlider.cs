using Abp.Domain.Entities;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.Slider
{
  public class MainSlider:FullAuditedEntity<int>
  {
    public string ImagePath { get; set; }
    public bool IsActive { get; set; }
    public int OrderNO { get; set; }

    public string Title { get; set; }
    public string Description { get; set; }
  }
}
