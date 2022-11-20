using Abp.Application.Services.Dto;
using Abp.Domain.Entities.Auditing;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.SkinConfig
{
    public class SkinHeader : FullAuditedEntity<int>
    {

        public string SkinName { get; set; }
        public int Logo { get; set; }
        public int SmallImage { get; set; }
        public int BannerImage { get; set; }
        public int? FaviconId { get; set; }
        public string PrimaryColour { get; set; }
        public string SecondaryColour { get; set; }
        public string HeaderColour { get; set; }
        public string FooterColour { get; set; }
        public string PrimaryTextColour { get; set; }
        public string SecondaryTextColour { get; set; }
        [NotMapped]
        public string LogoFileHandle { get; set; }
        [NotMapped]
        public string SmallFileHandle { get; set; }
        [NotMapped]
        public string BannerFileHandle { get; set; }
        [NotMapped]
        public string FaviconFileHandle { get; set; }
    }
}
