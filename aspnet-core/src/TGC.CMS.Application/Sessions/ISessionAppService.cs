using System.Threading.Tasks;
using Abp.Application.Services;
using TGC.CMS.Sessions.Dto;

namespace TGC.CMS.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}
