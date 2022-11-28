using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;
using TGC.CMS.PromotionalText;
using TGC.CMS.Promotions.Dtos;

namespace TGC.CMS.Promotions
{
  public interface IPromotionAppService : IAsyncCrudAppService<Promotiondto, int, PagedpromotionResultRequestDto, CreatePromotionDto, Promotiondto>
  {
  }
}
