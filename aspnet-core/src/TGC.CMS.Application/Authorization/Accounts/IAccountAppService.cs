using System.Threading.Tasks;
using Abp.Application.Services;
using TGC.CMS.Authorization.Accounts.Dto;

namespace TGC.CMS.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}
