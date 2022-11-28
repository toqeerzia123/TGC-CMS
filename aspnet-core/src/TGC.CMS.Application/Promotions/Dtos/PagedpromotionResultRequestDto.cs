using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.Promotions.Dtos
{
  public class PagedpromotionResultRequestDto : PagedResultRequestDto
  {
    public string Keyword { get; set; }
  }
}
