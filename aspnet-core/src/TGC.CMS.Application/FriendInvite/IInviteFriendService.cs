using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.FriendInvite.Dtos;
using TGC.CMS.InviteFriend.Dtos;
using TGC.CMS.Slider.Dto;

namespace TGC.CMS.InviteFriend
{
    public interface IInviteFriendService : IAsyncCrudAppService<InviteFriendDto, int, PagedInviteFriendResultRequestDto, CreateInviteFriendDto, UpdateInviteFriendDto>
    {
    }
}
