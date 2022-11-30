using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.Users.Dto
{
    public class UpdateTargetUserDto
    {
        public string UserName { get; set; }
        public string Country { get; set; }
        public string FullName { get; set; }
        public string About { get; set; }
        public DateTime? DOB { get; set; }
        public string TimeZone { get; set; }
        public string Gender { get; set; }

    }
}
