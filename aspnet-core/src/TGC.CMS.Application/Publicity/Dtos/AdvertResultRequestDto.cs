using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.Publicity.Dtos
{
    public class AdvertResultRequestDto: PagedResultRequestDto
    {
        public string AdvertismentId { get; set; }
    }
}
