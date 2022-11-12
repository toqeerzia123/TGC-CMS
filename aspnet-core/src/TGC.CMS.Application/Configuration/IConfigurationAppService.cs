using System.Threading.Tasks;
using TGC.CMS.Configuration.Dto;

namespace TGC.CMS.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}
