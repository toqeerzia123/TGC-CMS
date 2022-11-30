using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.Users.Dto
{
    public class CodeVerificationDto
    {
        public string VerificationCode { get; set; }
        public string UserName { get; set; }
    }
}
