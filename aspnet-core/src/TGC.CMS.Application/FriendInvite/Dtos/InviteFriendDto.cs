using Abp.Application.Services.Dto;
using TGC.CMS.Invite;
using Abp.AutoMapper;

namespace TGC.CMS.FriendInvite.Dtos
{
    [AutoMapFrom(typeof(TGC.CMS.Invite.InviteFriend))]
    public class InviteFriendDto : EntityDto<int>
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImagePath { get; set; }
    }
}
