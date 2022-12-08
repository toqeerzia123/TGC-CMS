using Abp.Application.Services;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Packages;
using TGC.CMS.UserPackages.Dtos;

namespace TGC.CMS.UserPackages
{
    public class UserPackageAppService : AsyncCrudAppService<UserPackage, UserPackageDto, int, PagedUserPackageResultDto, CreateUserPackageDto, UserPackageDto>, IUserPackageAppService
    {
        public UserPackageAppService(IRepository<UserPackage, int> repository) : base(repository)
        {
        }

        public async Task<object> getUserPackages(int input)
        {
            return  Repository.GetAllIncluding(x => x.Package).Where(x=>x.UserId==input).FirstOrDefault();
        }
    }
}
