using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;
using TGC.CMS.WatchusChannel.Dtos;

namespace TGC.CMS.WatchusChannel
{
    public interface IWatchusAppService : IAsyncCrudAppService<WatchusListDto, int, WatchusResultRequestDto, WatchusCreateDto, WatchusUpdateDto>
    {
    }
}
