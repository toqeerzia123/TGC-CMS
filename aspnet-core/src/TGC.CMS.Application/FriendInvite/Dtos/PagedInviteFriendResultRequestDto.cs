using Abp.Application.Services.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.InviteFriend.Dtos
{
  public class PagedInviteFriendResultRequestDto : PagedResultRequestDto
  {
    public string Keyword { get; set; }
  }
}
