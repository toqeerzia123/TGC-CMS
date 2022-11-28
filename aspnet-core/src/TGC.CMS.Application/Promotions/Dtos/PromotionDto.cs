using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post;
using TGC.CMS.PromotionalText;

namespace TGC.CMS.Promotions.Dtos
{
  [AutoMapFrom(typeof(Promotion))]
  public class Promotiondto : EntityDto<int>
  {
    public string Text { get; set; }
    public bool IsActive { get; set; }
  }
}
