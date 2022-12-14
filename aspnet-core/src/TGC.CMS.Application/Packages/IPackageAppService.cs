using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Packages.Dtos;

namespace TGC.CMS.Packages
{
    public interface IPackageAppService : IAsyncCrudAppService<PackageDto, int, PagedPackageResultDto, CreatePackageDto, PackageDto>
    {

    }
}
