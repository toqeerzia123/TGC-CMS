using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.SiteBanners.Dto
{
    public class BannerResultRequestDto : PagedResultRequestDto
    {
        public string BannerId { get; set; }
    }
}
