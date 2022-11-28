using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.Packages
{
    public class Package : FullAuditedEntity<int>
    {
        public int? NoOfTokens { get; set; }
        public double Discount { get; set; }
        public double UnitPrice { get; set; }
        public double TotalPrice { get; set; }
    }
}
