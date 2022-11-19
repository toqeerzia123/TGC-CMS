using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.CMS_Post
{
    public class Post : FullAuditedEntity<int>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime PostDate { get; set; }
        public string Prize { get; set; }
        public int? Amount { get; set; }
        public string Elimination { get; set; }

        [ForeignKey("PostCategory")]
        public int CategoryId { get; set; }
        public PostCategory PostCategory { get; set; }
        public int DisplayOrderNo { get; set; }
        public virtual ICollection<PostImage> PostImages { get; set; }
    }
}
