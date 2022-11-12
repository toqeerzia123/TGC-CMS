using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using TGC.CMS.EntityFrameworkCore;
using TGC.CMS.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace TGC.CMS.Web.Tests
{
    [DependsOn(
        typeof(CMSWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class CMSWebTestModule : AbpModule
    {
        public CMSWebTestModule(CMSEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(CMSWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(CMSWebMvcModule).Assembly);
        }
    }
}