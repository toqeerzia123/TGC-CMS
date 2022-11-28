using System;
using System.Collections.Generic;
using Abp.Authorization.Users;
using Abp.Extensions;

namespace TGC.CMS.Authorization.Users
{   
    public class User : AbpUser<User>
    {
        public const string DefaultPassword = "123qwe";

        public static string CreateRandomPassword()
        {
            return Guid.NewGuid().ToString("N").Truncate(16);
        }
        public string AccountId { get; set; }
        public string UserLevel { get; set; }


        public string Country { get; set; }
        public string FullName { get; set; }
        public string About { get; set; }
        public DateTime? DOB { get; set; }
        public string TimeZone { get; set; }
        public string Gender { get; set; }
        public DateTime? EmailCodeExpiry { get; set; }
        public static User CreateTenantAdminUser(int tenantId, string emailAddress)
        {
            var user = new User
            {
                TenantId = tenantId,
                UserName = AdminUserName,
                Name = AdminUserName,
                Surname = AdminUserName,
                EmailAddress = emailAddress,
                Roles = new List<UserRole>()
            };

            user.SetNormalizedNames();

            return user;
        }
    }
}
