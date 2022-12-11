using Abp.Application.Services.Dto;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.Publicity.Dtos
{
    public class AdvertCreateDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public IFormFile? Image { get; set; }
        public string AdvId { get; set; }
        public string ChannelUrl { get; set; }
    }

    public class AdvertUpdateDto : AdvertCreateDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
