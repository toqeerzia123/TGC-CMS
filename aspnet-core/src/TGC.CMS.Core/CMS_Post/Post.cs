using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.CMS_Post
{
    public class Post : FullAuditedEntity<long>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime PostDate { get; set; }
        public int CategoryId { get; set; }
        public int DisplayOrderNo { get; set; }
    }
}
