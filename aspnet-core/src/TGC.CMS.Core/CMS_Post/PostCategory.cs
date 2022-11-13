using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.CMS_Post
{
    public class PostCategory : FullAuditedEntity<int>
    {
        public string CategoryName { get; set; }
    }
}
