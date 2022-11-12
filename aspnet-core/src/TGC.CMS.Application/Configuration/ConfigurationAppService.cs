using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using TGC.CMS.Configuration.Dto;

namespace TGC.CMS.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : CMSAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}
