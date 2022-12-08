using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;
using TGC.CMS.Packages.Dtos;
using TGC.CMS.UserPackages.Dtos;

namespace TGC.CMS.UserPackages
{
    public interface IUserPackageAppService : IAsyncCrudAppService<UserPackageDto, int, PagedUserPackageResultDto, CreateUserPackageDto, UserPackageDto>
    {
        Task<object> getUserPackages(int input);
    }
}

