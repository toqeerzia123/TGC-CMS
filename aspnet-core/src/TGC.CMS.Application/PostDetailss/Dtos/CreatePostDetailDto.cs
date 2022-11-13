using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.PostDetailss.Dtos
{
    public class CreatePostDetailDto
    {
        public string Prize { get; set; }
        public int? Amount { get; set; }
        public string Elimination { get; set; }
        public int PostId { get; set; }
    }
}
