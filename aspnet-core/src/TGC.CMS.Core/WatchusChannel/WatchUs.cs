using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.WatchusChannel
{
    public class WatchUs : FullAuditedEntity<int>
    {
        public string Title { get; set; }
        public string LogoIcon { get; set; }
        public string ChannelType { get; set; }
        public string ChannelUrl { get; set; }

    }
}
