using Abp.Authorization;
using TGC.CMS.Authorization.Roles;
using TGC.CMS.Authorization.Users;

namespace TGC.CMS.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}
