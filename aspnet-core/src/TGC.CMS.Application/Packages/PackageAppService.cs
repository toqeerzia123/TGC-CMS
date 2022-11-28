using Abp.Application.Services;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Packages.Dtos;

namespace TGC.CMS.Packages
{
    public class PackageAppService : AsyncCrudAppService<Package, PackageDto, int, PagedPackageResultDto, CreatePackageDto, PackageDto>, IPackageAppService
    {
        public PackageAppService(IRepository<Package, int> repository) : base(repository)
        {

        }
    }
}
