using Abp.Application.Services;
using TGC.CMS.MultiTenancy.Dto;

namespace TGC.CMS.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}

