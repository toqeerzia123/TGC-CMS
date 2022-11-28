using Abp.Application.Services.Dto;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.Slider.Dto;

namespace TGC.CMS.FriendInvite.Dtos
{
  public class CreateInviteFriendDto
  {
    public string Title { get; set; }
    public string Description { get; set; }
    public string ImagePath { get; set; }
    public IFormFile Image { get; set; }
  }
    public class UpdateInviteFriendDto : CreateInviteFriendDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
