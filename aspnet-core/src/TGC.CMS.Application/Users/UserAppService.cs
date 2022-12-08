using System;
using System.Collections.Generic;
using System.Linq;

using System.Threading.Tasks;
using Abp.Application.Services;
using Abp.Application.Services.Dto;
using Abp.Authorization;
using Abp.Domain.Entities;
using Abp.Domain.Repositories;
using Abp.Extensions;
using Abp.IdentityFramework;
using Abp.Linq.Extensions;
using Abp.Localization;
using Abp.Runtime.Session;
using Abp.UI;
using TGC.CMS.Authorization;
using TGC.CMS.Authorization.Accounts;
using TGC.CMS.Authorization.Roles;
using TGC.CMS.Authorization.Users;
using TGC.CMS.Roles.Dto;
using TGC.CMS.Users.Dto;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Mvc;
using MimeKit.Text;
using MimeKit;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using Abp.Net.Mail;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Authorization;

namespace TGC.CMS.Users
{
    [AbpAuthorize(PermissionNames.Pages_Users)]
    public class UserAppService : AsyncCrudAppService<User, UserDto, long, PagedUserResultRequestDto, CreateUserDto, UserDto>, IUserAppService
    {
        private readonly UserManager _userManager;
        private readonly RoleManager _roleManager;
        private readonly IRepository<Role> _roleRepository;
        private readonly IPasswordHasher<User> _passwordHasher;
        private readonly IAbpSession _abpSession;
        private readonly LogInManager _logInManager;
        private readonly IEmailSender _emailSender;
        public UserAppService(
            IRepository<User, long> repository,
            UserManager userManager,
            RoleManager roleManager,
            IRepository<Role> roleRepository,
            IPasswordHasher<User> passwordHasher,
            IAbpSession abpSession,
            LogInManager logInManager,
            IEmailSender emailSender)
            : base(repository)
        {
            _userManager = userManager;
            _roleManager = roleManager;
            _roleRepository = roleRepository;
            _passwordHasher = passwordHasher;
            _abpSession = abpSession;
            _logInManager = logInManager;
            _emailSender = emailSender;
        }
        public override async Task<UserDto> CreateAsync(CreateUserDto input)
        {
            CheckCreatePermission();
            var user = ObjectMapper.Map<User>(input);
            user.TenantId = AbpSession.TenantId;
            user.IsEmailConfirmed = false;
            user.AccountId = await CreateAccountId(input.UserName);
            Random objRandom = new Random();
            var VerificationCode = objRandom.Next(10000, 99999).ToString();
            user.EmailConfirmationCode = VerificationCode;
            user.EmailCodeExpiry = DateTime.Now.AddMinutes(5);
            await _userManager.InitializeOptionsAsync(AbpSession.TenantId);
            CheckErrors(await _userManager.CreateAsync(user, input.Password));
            if (input.RoleNames != null)
            {
                CheckErrors(await _userManager.SetRolesAsync(user, input.RoleNames));
            }
            CurrentUnitOfWork.SaveChanges();
            var emailBody = "Email Verification Code Is :" + VerificationCode.ToString() + " Expire in 5 Mints";
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("toqeerzia123@outlook.com"));
            email.To.Add(MailboxAddress.Parse(input.UserName));
            email.Subject = "Email Verification Code ";
            email.Body = new TextPart(TextFormat.Html) { Text = emailBody };
            using var smtp = new SmtpClient();
            smtp.ServerCertificateValidationCallback = (object sender, X509Certificate? certificate, X509Chain? chain, SslPolicyErrors sslPolicyErrors) => true;
            smtp.Connect("smtp-mail.outlook.com", 587, SecureSocketOptions.StartTls);
            smtp.Authenticate("toqeerzia123@outlook.com", "a1b2c3d4e5f6g7h8");
            var response = smtp.Send(email);
            smtp.Disconnect(true);
            return MapToEntityDto(user);
        }
        public override async Task<UserDto> UpdateAsync(UserDto input)
        {
            CheckUpdatePermission();
            var user = await _userManager.GetUserByIdAsync(input.Id);
          //  MapToEntity(input, user);
            user.TimeZone = input.TimeZone;
            user.About=input.About;
            user.FullName = input.FullName;
            user.DOB=input.DOB;
            user.UserName=input.UserName;
            user.Gender = input.Gender;
            CheckErrors(await _userManager.UpdateAsync(user));
            if (input.RoleNames != null)
            {
                CheckErrors(await _userManager.SetRolesAsync(user, input.RoleNames));
            }
            return await GetAsync(input);
        }
        public override async Task DeleteAsync(EntityDto<long> input)
        {
            var user = await _userManager.GetUserByIdAsync(input.Id);
            await _userManager.DeleteAsync(user);
        }
        [AbpAuthorize(PermissionNames.Pages_Users_Activation)]
        public async Task Activate(EntityDto<long> user)
        {
            await Repository.UpdateAsync(user.Id, async (entity) =>
            {
                entity.IsActive = true;
            });
        }
        [AbpAuthorize(PermissionNames.Pages_Users_Activation)]
        public async Task DeActivate(EntityDto<long> user)
        {
            await Repository.UpdateAsync(user.Id, async (entity) =>
            {
                entity.IsActive = false;
            });
        }
        public async Task<ListResultDto<RoleDto>> GetRoles()
        {
            var roles = await _roleRepository.GetAllListAsync();
            return new ListResultDto<RoleDto>(ObjectMapper.Map<List<RoleDto>>(roles));
        }
        public async Task ChangeLanguage(ChangeUserLanguageDto input)
        {
            await SettingManager.ChangeSettingForUserAsync(
                AbpSession.ToUserIdentifier(),
                LocalizationSettingNames.DefaultLanguage,
                input.LanguageName
            );
        }
        protected override User MapToEntity(CreateUserDto createInput)
        {
            var user = ObjectMapper.Map<User>(createInput);
            user.SetNormalizedNames();
            return user;
        }
        protected override void MapToEntity(UserDto input, User user)
        {
            ObjectMapper.Map(input, user);
            user.SetNormalizedNames();
        }
        protected override UserDto MapToEntityDto(User user)
        {
            var roleIds = user.Roles.Select(x => x.RoleId).ToArray();
            var roles = _roleManager.Roles.Where(r => roleIds.Contains(r.Id)).Select(r => r.NormalizedName);
            var userDto = base.MapToEntityDto(user);
            userDto.RoleNames = roles.ToArray();
            return userDto;
        }
        protected override IQueryable<User> CreateFilteredQuery(PagedUserResultRequestDto input)
        {
            return Repository.GetAllIncluding(x => x.Roles)
                .WhereIf(!input.Keyword.IsNullOrWhiteSpace(), x => x.UserName.Contains(input.Keyword) || x.Name.Contains(input.Keyword) || x.EmailAddress.Contains(input.Keyword))
                .WhereIf(input.IsActive.HasValue, x => x.IsActive == input.IsActive);
        }
        protected override async Task<User> GetEntityByIdAsync(long id)
        {
            var user = await Repository.GetAllIncluding(x => x.Roles).FirstOrDefaultAsync(x => x.Id == id);
            if (user == null)
            {
                throw new EntityNotFoundException(typeof(User), id);
            }
            return user;
        }
        protected override IQueryable<User> ApplySorting(IQueryable<User> query, PagedUserResultRequestDto input)
        {
            return query.OrderBy(r => r.UserName);
        }
        protected virtual void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
        public async Task<bool> ChangePassword(ChangePasswordDto input)
        {
            await _userManager.InitializeOptionsAsync(AbpSession.TenantId);
            var user = await _userManager.FindByIdAsync(AbpSession.GetUserId().ToString());
            if (user == null)
            {
                throw new Exception("There is no current user!");
            }

            if (await _userManager.CheckPasswordAsync(user, input.CurrentPassword))
            {
                CheckErrors(await _userManager.ChangePasswordAsync(user, input.NewPassword));
            }
            else
            {
                CheckErrors(IdentityResult.Failed(new IdentityError
                {
                    Description = "Incorrect password."
                }));
            }
            return true;
        }
        public async Task<bool> ResetPassword(ResetPasswordDto input)
        {
            if (_abpSession.UserId == null)
            {
                throw new UserFriendlyException("Please log in before attempting to reset password.");
            }

            var currentUser = await _userManager.GetUserByIdAsync(_abpSession.GetUserId());
            var loginAsync = await _logInManager.LoginAsync(currentUser.UserName, input.AdminPassword, shouldLockout: false);
            if (loginAsync.Result != AbpLoginResultType.Success)
            {
                throw new UserFriendlyException("Your 'Admin Password' did not match the one on record.  Please try again.");
            }

            if (currentUser.IsDeleted || !currentUser.IsActive)
            {
                return false;
            }

            var roles = await _userManager.GetRolesAsync(currentUser);
            if (!roles.Contains(StaticRoleNames.Tenants.Admin))
            {
                throw new UserFriendlyException("Only administrators may reset passwords.");
            }
            var user = await _userManager.GetUserByIdAsync(input.UserId);
            if (user != null)
            {
                user.Password = _passwordHasher.HashPassword(user, input.NewPassword);
                await CurrentUnitOfWork.SaveChangesAsync();
            }
            return true;
        }
        [AllowAnonymous]
        public async Task<bool> EmailCodeVerification(CodeVerificationDto dto)
        {

            var currentUser = await Repository.GetAll().Where(x => x.UserName == dto.UserName).FirstOrDefaultAsync();
    
            if (currentUser.IsEmailConfirmed == true&&currentUser.EmailAddress==dto.UserName)
            {
                throw new UserFriendlyException("Already verified");
            }
            if (dto.VerificationCode != currentUser.EmailConfirmationCode &&  currentUser.EmailAddress == dto.UserName)
            {
                throw new UserFriendlyException("Verification Code Is Not Match");




            }
            //if (DateTime.Now >= currentUser.EmailCodeExpiry)
            //{
            //    throw new UserFriendlyException("Verification Code Is  Expired");

            //}
            await Repository.UpdateAsync(currentUser.Id, async (entity) =>
            {
                entity.IsEmailConfirmed = true;
            });
            return true;
        }

        public async Task<bool> ReSendEmailVerificationCode()
        {
            var currentUser = await _userManager.GetUserByIdAsync(_abpSession.GetUserId());
            Random objRandom = new Random();
            var VerificationCode = objRandom.Next(10000, 99999).ToString();
            var emailBody = "Email Verification Code Is :" + VerificationCode.ToString() + " Expire in 5 Mints";
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("toqeerzia123@outlook.com"));
            email.To.Add(MailboxAddress.Parse(currentUser.EmailAddress));
            email.Subject = "Email Verification Code ";
            email.Body = new TextPart(TextFormat.Html) { Text = emailBody };
            using var smtp = new SmtpClient();
            smtp.ServerCertificateValidationCallback = (object sender, X509Certificate? certificate, X509Chain? chain, SslPolicyErrors sslPolicyErrors) => true;
            smtp.Connect("smtp-mail.outlook.com", 587, SecureSocketOptions.StartTls);
            smtp.Authenticate("toqeerzia123@outlook.com", "a1b2c3d4e5f6g7h8");
            var response = smtp.Send(email);
            smtp.Disconnect(true);
            await Repository.UpdateAsync(currentUser.Id, async (entity) =>
            {
                entity.IsEmailConfirmed = false;
                entity.EmailConfirmationCode = VerificationCode;
                //entity.EmailCodeExpiry = DateTime.Now.AddMinutes(5);
            });
            return true;

        }

        public async Task<string> CreateAccountId(string name)
        {
            var AccountNo = "";
            var AlreadyUserAccount = string.Empty;
                //Repository.GetAll().ToList().OrderByDescending(x => x.Id).FirstOrDefault().AccountId;
            if (!string.IsNullOrEmpty(AlreadyUserAccount))
            {
                var newid = AlreadyUserAccount.Split('-');
                AccountNo = newid[0] + "-" + name + "-" + (Convert.ToInt16(newid[2]) + 1);
            }
            else
            {
                AccountNo = "TGC-" + name + "-" + 1;
            }

            return AccountNo;
        }
        [AllowAnonymous] 
        public async Task<UserDto> CreateTargetUser(CreatetargetUserDto input)
        {
            CheckCreatePermission();
            var user = ObjectMapper.Map<User>(input);
            user.TenantId = AbpSession.TenantId;
            user.IsEmailConfirmed = false;
           user.AccountId = await CreateAccountId(input.UserName);
            Random objRandom = new Random();
            var VerificationCode = objRandom.Next(10000, 99999).ToString();
            user.EmailAddress = input.UserName;
            user.EmailConfirmationCode = VerificationCode;
           user.EmailCodeExpiry = DateTime.Now.AddMinutes(5);
            user.Name=input.UserName;
            user.Surname = input.UserName;
            user.IsActive = true;
            try
            {
                CheckErrors(await _userManager.CreateAsync(user, input.Password));
            }
            catch (Exception ex)
            {
                var dd = ex.Message;
                throw;
            }
         
            var Roles = new List<string>();
            Roles.Add("User");
            await _userManager.SetRolesAsync(user, Roles.ToArray());
            CurrentUnitOfWork.SaveChanges();
            var emailBody = "Email Verification Code Is :" + VerificationCode.ToString() + " Expire in 5 Mints";
            var email = new MimeMessage();
            email.From.Add(MailboxAddress.Parse("toqeerzia123@outlook.com"));
            email.To.Add(MailboxAddress.Parse(input.UserName));
            email.Subject = "Email Verification Code ";
            email.Body = new TextPart(TextFormat.Html) { Text = emailBody };
            using var smtp = new SmtpClient();
            smtp.ServerCertificateValidationCallback = (object sender, X509Certificate? certificate, X509Chain? chain, SslPolicyErrors sslPolicyErrors) => true;
            smtp.Connect("smtp-mail.outlook.com", 587, SecureSocketOptions.StartTls);
            smtp.Authenticate("toqeerzia123@outlook.com", "a1b2c3d4e5f6g7h8");
            var response = smtp.Send(email);
            smtp.Disconnect(true);
            return MapToEntityDto(user);
        }


    }
}

