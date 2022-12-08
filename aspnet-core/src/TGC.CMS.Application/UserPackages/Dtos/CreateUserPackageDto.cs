using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Packages;

namespace TGC.CMS.UserPackages.Dtos
{
    public class CreateUserPackageDto
    {
        public int PackageId { get; set; }
        public long UserId { get; set; }
    }
}
