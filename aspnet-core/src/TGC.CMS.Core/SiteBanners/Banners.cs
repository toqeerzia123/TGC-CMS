using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.SiteBanners
{
    public class Banners : FullAuditedEntity<int>
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
