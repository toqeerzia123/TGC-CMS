using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Packages.Dtos;
using TGC.CMS.Packages;
using TGC.CMS.UserPackages.Dtos;

namespace TGC.CMS.UserPackages.MapperProlie
{
    public class MapperProfile : Profile
    {
        public MapperProfile()
        {
            CreateMap<CreateUserPackageDto, UserPackage>();
            CreateMap<UserPackageDto, UserPackage>();
        }
    }
}
