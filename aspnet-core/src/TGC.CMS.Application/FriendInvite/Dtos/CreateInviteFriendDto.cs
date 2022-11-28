using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace TGC.CMS.InviteFriend.Dtos
{
  public class CreateInviteFriendDto
  {
    public string Title { get; set; }
    public string Description { get; set; }
    public string ImagePath { get; set; }
    public IFormFile Image { get; set; }
  }
}
