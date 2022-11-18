using Abp.AutoMapper;
using Abp.Domain.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.CMS_Post.Dtos
{
    public class CreatePostDto
    {
        public int? PostId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime PostDate { get; set; }
        public int CategoryId { get; set; }
        public int DisplayOrderNo { get; set; }

        public string Prize { get; set; }
        public int? Amount { get; set; }
        public string Elimination { get; set; }

        public int? PostDetailId { get; set; }

        public IList<IFormFile> Image { get; set; }
    }
}
