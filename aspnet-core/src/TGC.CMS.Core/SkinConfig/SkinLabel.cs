using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.SkinConfig
{
    public class SkinLabel : FullAuditedEntity<int>
    {

        public int? SkinId { get; set; }
        public int? LanguageId { get; set; }
        public int? FieldId { get; set; }
        public string FieldText { get; set; }
        public string FieldName { get; set; }
    }
}
