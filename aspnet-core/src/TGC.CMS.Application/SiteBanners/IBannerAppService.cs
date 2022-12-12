using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Publicity.Dtos;
using TGC.CMS.SiteBanners.Dto;

namespace TGC.CMS.SiteBanners
{
    public interface IBannerAppService : IAsyncCrudAppService<BannerListDto, int, BannerResultRequestDto, BannerCreateDto, BannerUpdateDto>
    {
    }
}
