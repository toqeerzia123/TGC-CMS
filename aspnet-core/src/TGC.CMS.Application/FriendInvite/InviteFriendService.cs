using Abp.Application.Services;
using Abp.Domain.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.FriendInvite.Dtos;
using TGC.CMS.InviteFriend.Dtos;
using TGC.CMS.Slider.Dto;
using TGC.CMS.Slider;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Hosting;

namespace TGC.CMS.InviteFriend
{
    public class InviteFriendService : AsyncCrudAppService<TGC.CMS.Invite.InviteFriend, InviteFriendDto, int, PagedInviteFriendResultRequestDto, CreateInviteFriendDto, UpdateInviteFriendDto>, IInviteFriendService
    {
        private IWebHostEnvironment _environment;
        public InviteFriendService(IRepository<TGC.CMS.Invite.InviteFriend, int> repository, IWebHostEnvironment environment) : base(repository)
        {
            _environment = environment;
        }

        public override async Task<InviteFriendDto> UpdateAsync([FromForm] UpdateInviteFriendDto input)
        {
            var data = await Repository.GetAllIncluding(x => x.Id == input.Id).FirstOrDefaultAsync();
            if (input.Image != null && input.Image.Length > 0)
            {
                string uploads = Path.Combine(_environment.WebRootPath, "Content\\InviteFriendImages");

                var Filename = DateTime.Now.ToString("yyyyMMddHHmmssfff").ToString() + "_" + input.Image.FileName;
                var filePath = Path.Combine(uploads, Filename);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    input.Image.CopyTo(fileStream);
                }
                data.ImagePath = Filename;
            }


            CheckCreatePermission();
            data.CreationTime = DateTime.Now;
            data.IsDeleted = false;
            await Repository.InsertAsync(data);
            return MapToEntityDto(data);

        }
        public override async Task<InviteFriendDto> CreateAsync([FromForm] CreateInviteFriendDto input)
        {

            if (input.Image != null && input.Image.Length > 0)
            {
                string uploads = Path.Combine(_environment.WebRootPath, "Content\\InviteFriendImages");

                var Filename = DateTime.Now.ToString("yyyyMMddHHmmssfff").ToString() + "_" + input.Image.FileName;
                var filePath = Path.Combine(uploads, Filename);

                using (var fileStream = new FileStream(filePath, FileMode.Create))
                {
                    input.Image.CopyTo(fileStream);
                }
                input.ImagePath = Filename;
            }

            var model = ObjectMapper.Map<TGC.CMS.Invite.InviteFriend>(input);
            CheckCreatePermission();
            model.CreationTime = DateTime.Now;
            model.IsDeleted = false;
            await Repository.InsertAsync(model);
            return MapToEntityDto(model);

        }
    }
}
