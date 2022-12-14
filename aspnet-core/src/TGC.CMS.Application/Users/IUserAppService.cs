using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using TGC.CMS.Roles.Dto;
using TGC.CMS.Users.Dto;

namespace TGC.CMS.Users
{
    public interface IUserAppService : IAsyncCrudAppService<UserDto, long, PagedUserResultRequestDto, CreateUserDto, UserDto>
    {
        Task DeActivate(EntityDto<long> user);
        Task Activate(EntityDto<long> user);
        Task<ListResultDto<RoleDto>> GetRoles();
        Task ChangeLanguage(ChangeUserLanguageDto input);

        Task<bool> ChangePassword(ChangePasswordDto input);
        Task<bool> EmailCodeVerification(CodeVerificationDto dto);
        Task<bool> ReSendEmailVerificationCode();
        Task<UserDto> CreateTargetUser(CreatetargetUserDto input);

    }
}
