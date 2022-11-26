using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.Invite
{
  public class InviteFriend : FullAuditedEntity<int>
  {
    public string Title { get; set; }
    public string Description { get; set; }
    public string ImagePath { get; set; }
  }
}
