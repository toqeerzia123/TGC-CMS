using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Packages.Dtos;

namespace TGC.CMS.Packages.MapperProfile
{
    public class PackageMapProfile : Profile
    {
        public PackageMapProfile()
        {
            CreateMap<CreatePackageDto, Package>();
            CreateMap<PackageDto, Package>();
        }
    }
}
