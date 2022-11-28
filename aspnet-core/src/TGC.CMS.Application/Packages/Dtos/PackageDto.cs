using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.Packages.Dtos
{
    [AutoMapFrom(typeof(Package))]
    public class PackageDto : EntityDto<int>
    {
        public int? NoOfTokens { get; set; }
        public double Discount { get; set; }
        public double UnitPrice { get; set; }
        public double TotalPrice { get; set; }

    }
}
