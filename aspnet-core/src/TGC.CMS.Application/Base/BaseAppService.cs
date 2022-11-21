

using Abp.Application.Services;
using Microsoft.AspNetCore.Hosting;

namespace TGC.CMS.Base
{
    public interface IBaseAppService
    {
        IWebHostEnvironment WebHostEnvironment { get; }
    }
    public class BaseAppService : ApplicationService
    {
        private IWebHostEnvironment _webHostEnvironment;

        public BaseAppService(IWebHostEnvironment webHostEnvironment)
        {
            _webHostEnvironment = webHostEnvironment;
        }

        public void test()
        {
           
        }
        public IWebHostEnvironment WebHostEnvironment { get { return _webHostEnvironment; } }
    }
}
