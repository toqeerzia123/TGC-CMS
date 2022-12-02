using System;
using System.ComponentModel.DataAnnotations;
using Abp.Application.Services.Dto;
using Abp.Authorization.Users;
using Abp.AutoMapper;
using TGC.CMS.Authorization.Users;

namespace TGC.CMS.Users.Dto
{
    [AutoMapFrom(typeof(User))]
    public class UserDto : EntityDto<long>
    {
 
        public string UserName { get; set; }

   
        public string Name { get; set; }


        public string Surname { get; set; }

      
        public string EmailAddress { get; set; }

        public bool IsActive { get; set; }

        public string FullName { get; set; }

        public DateTime? LastLoginTime { get; set; }

        public DateTime CreationTime { get; set; }

        public string Country { get; set; }

        public string About { get; set; }
        public DateTime? DOB { get; set; }
        public string TimeZone { get; set; }
        public string Gender { get; set; }
  
        public DateTime? EmailCodeExpiry { get; set; }

        public string[] RoleNames { get; set; }
    }
}
