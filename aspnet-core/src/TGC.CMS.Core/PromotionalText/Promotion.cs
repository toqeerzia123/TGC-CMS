using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.PromotionalText
{
  public class Promotion : FullAuditedEntity<int>
  {
    public string Text { get; set; }
    public bool IsActive { get; set; }
  }
}
