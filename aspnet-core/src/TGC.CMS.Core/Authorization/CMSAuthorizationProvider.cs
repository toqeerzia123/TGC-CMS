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
            context.CreatePermission(PermissionNames.Pages_Slider, L("Slider"));
            context.CreatePermission(PermissionNames.Pages_Promotions, L("Promotions"));
            context.CreatePermission(PermissionNames.Pages_InviteFriend, L("InviteFriend"));
            context.CreatePermission(PermissionNames.Pages_FavouriteGames, L("FavouriteGames"));
            context.CreatePermission(PermissionNames.Pages_Howthisworks, L("Howthisworks"));
            context.CreatePermission(PermissionNames.Pages_Advertisment1, L("Ad1"));
            context.CreatePermission(PermissionNames.Pages_Advertisment2, L("Ad2"));

            context.CreatePermission(PermissionNames.Pages_Watchus, L("Watchus"));
            context.CreatePermission(PermissionNames.Pages_Blogs, L("Blogs"));
            context.CreatePermission(PermissionNames.Pages_Articles, L("Articles"));
            context.CreatePermission(PermissionNames.Pages_FAQs, L("FAQs"));
            context.CreatePermission(PermissionNames.Pages_Navigations, L("Navigations"));
            context.CreatePermission(PermissionNames.Pages_Support, L("Support"));
            context.CreatePermission(PermissionNames.Pages_Social, L("Social"));

            context.CreatePermission(PermissionNames.Pages_Tenants, L("Tenants"), multiTenancySides: MultiTenancySides.Host);
        }

        private static ILocalizableString L(string name)
        {
            return new LocalizableString(name, CMSConsts.LocalizationSourceName);
        }
    }
}
