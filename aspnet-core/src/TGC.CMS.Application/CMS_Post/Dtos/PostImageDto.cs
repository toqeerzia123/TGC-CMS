using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.CMS_Post.Dtos
{
    public class PostImageDto
    {
        public IList<IFormFile> Image { get; set; }
        public bool IsPrimaryImage { get; set; }
    }
}
