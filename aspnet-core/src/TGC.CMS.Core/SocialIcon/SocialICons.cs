using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.SocialIcon
{
  public class SocialICons : FullAuditedEntity<int>
  {
    public string Icon_Name { get; set; }
    public string Icon_Class { get; set; }
    public string Url { get; set; }
    public bool IsActive { get; set; }

  }
}
