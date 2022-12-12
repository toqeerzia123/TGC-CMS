using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post;

namespace TGC.CMS.SiteBanners.Dto
{
    [AutoMapFrom(typeof(Banners))]
    public class BannerListDto : EntityDto<int>
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
        public string Image { get; set; }
    }
}
