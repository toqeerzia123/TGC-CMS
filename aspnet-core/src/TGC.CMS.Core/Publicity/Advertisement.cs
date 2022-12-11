using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.Publicity
{
    public class Advertisement : FullAuditedEntity<int>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImageUrl { get; set; }
        public string AdvId { get; set; }
        public string ChannelUrl { get; set; }
        public string Icon { get; set; }
    }
}
