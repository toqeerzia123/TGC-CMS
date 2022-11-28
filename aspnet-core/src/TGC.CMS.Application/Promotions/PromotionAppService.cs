using Abp.Application.Services;
using Abp.Domain.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.PromotionalText;
using TGC.CMS.Promotions.Dtos;

namespace TGC.CMS.Promotions
{
  public class PromotionAppService : AsyncCrudAppService<Promotion, Promotiondto, int, PagedpromotionResultRequestDto, CreatePromotionDto, Promotiondto>, IPromotionAppService
  {
    public PromotionAppService(IRepository<Promotion, int> repository) : base(repository)
    {
    }
  }
}
