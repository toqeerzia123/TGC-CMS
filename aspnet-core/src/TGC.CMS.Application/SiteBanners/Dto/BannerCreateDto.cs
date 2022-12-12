using Abp.Application.Services.Dto;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.SiteBanners.Dto
{
    public class BannerCreateDto
    {
        public string FavouriteGameTitle { get; set; }
        public string FavouriteGameDecription { get; set; }
        public string BannerId { get; set; }
        public string HTW_TitleOne { get; set; }
        public string HTW_TitleTwo { get; set; }
        public string HTW_TitleThree { get; set; }
        public string HTW_DescriptionOne { get; set; }
        public string HTW_DescriptionTwo { get; set; }
        public string HTW_DescriptionThree { get; set; }
        public IFormFile? Image { get; set; }
    }

    public class BannerUpdateDto : BannerCreateDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
