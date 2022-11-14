using Abp.Domain.Entities.Auditing;
using System.ComponentModel.DataAnnotations.Schema;

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
