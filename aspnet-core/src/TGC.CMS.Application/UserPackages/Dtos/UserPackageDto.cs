using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Packages;

namespace TGC.CMS.UserPackages.Dtos
{
    [AutoMapFrom(typeof(UserPackage))]
    public class UserPackageDto : EntityDto<int>
    {
        public int PackageId { get; set; }
        public long UserId { get; set; }
    }
}
