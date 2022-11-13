using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.CMS_Post
{
    public   class PostDetail : FullAuditedEntity<int>
    {
        public string Prize { get; set; }
        public int? Amount { get; set; }
        public string Elimination { get; set; }
        [ForeignKey("Post")]
        public int PostId { get; set; }
        public Post Post { get; set; }

    }
}
