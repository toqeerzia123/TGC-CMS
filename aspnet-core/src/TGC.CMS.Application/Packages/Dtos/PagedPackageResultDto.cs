using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.Packages.Dtos
{
    public class PagedPackageResultDto : PagedResultRequestDto
    {
        public string Keyword { get; set; }

    }
}
