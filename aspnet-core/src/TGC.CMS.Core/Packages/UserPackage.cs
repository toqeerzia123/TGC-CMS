using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Authorization.Users;
using TGC.CMS.CMS_Post;

namespace TGC.CMS.Packages
{
    public class UserPackage : FullAuditedEntity<int>
    {
        [ForeignKey("Package")]
        public int PackageId { get; set; }
        public Package Package { get; set; }

        [ForeignKey("User")]
        public long UserId { get; set; }
        public User User { get; set; }
    }
}
