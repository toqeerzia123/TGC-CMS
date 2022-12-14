using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.FriendInvite.Dtos;
using TGC.CMS.InviteFriend.Dtos;
using TGC.CMS.PromotionalText;
using TGC.CMS.Promotions.Dtos;

namespace TGC.CMS.InviteFriend.MapperProfile
{
  public class InviteFriendMapperProfile:Profile
  {
    public InviteFriendMapperProfile()
    {
      CreateMap<InviteFriendDto, TGC.CMS.Invite.InviteFriend>();
      CreateMap<CreateInviteFriendDto, TGC.CMS.Invite.InviteFriend>();
    }
  }
}
