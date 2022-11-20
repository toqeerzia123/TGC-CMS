using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.SkinConfig
{
    public class SkinText : FullAuditedAggregateRoot<int>
    {

       
        public int? LanguageId { get; set; }
        public int? SectionId { get; set; }
        public string SectionText { get; set; }
    }
}
