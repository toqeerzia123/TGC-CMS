using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.SkinConfig
{
    public class SkinSection : FullAuditedEntity<int>
    { 
       
        public string SectionName { get; set; }
    }
}
