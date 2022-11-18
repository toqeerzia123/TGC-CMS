using Abp.Authorization;
using Abp.Localization;
using Abp.MultiTenancy;

namespace TGC.CMS.Authorization
{
    public class CMSAuthorizationProvider : AuthorizationProvider
    {
        public override void SetPermissions(IPermissionDefinitionContext context)
        {
            context.CreatePermission(PermissionNames.Pages_Users, L("Users"));
            context.CreatePermission(PermissionNames.Pages_Users_Activation, L("UsersActivation"));
            context.CreatePermission(PermissionNames.Pages_Roles, L("Roles"));
            context.CreatePermission(PermissionNames.Pages_Tournaments, L("Tournaments"));
            context.CreatePermission(PermissionNames.Pages_Games, L("Games"));
            context.CreatePermission(PermissionNames.Pages_Announcements, L("Announcements"));
            context.CreatePermission(PermissionNames.Pages_Tenants, L("Tenants"), multiTenancySides: MultiTenancySides.Host);
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, CMSConsts.LocalizationSourceName);
        }
    }
}
