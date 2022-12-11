using Abp.Application.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;
using TGC.CMS.CMS_Post;
using TGC.CMS.WatchusChannel.Dtos;
using Abp.Domain.Repositories;
using Abp.Domain.Uow;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Hosting;
using System.IO;
using TGC.CMS.Helper.Extensions;

namespace TGC.CMS.WatchusChannel
{
    public class WatchusAppService : AsyncCrudAppService<WatchUs, WatchusListDto, int, WatchusResultRequestDto, WatchusCreateDto, WatchusUpdateDto>, IWatchusAppService
    {
        private readonly IUnitOfWorkManager _unitOfWorkManager;
        public WatchusAppService(IRepository<WatchUs, int> repository, IUnitOfWorkManager unitOfWorkManager) : base(repository)
        {
            _unitOfWorkManager = unitOfWorkManager;
        }

        public override async Task<WatchusListDto> CreateAsync(WatchusCreateDto input)
        {
            try
            {
                #region PostDto to Entity Mapping

                var model = ObjectMapper.Map<WatchUs>(input);
                model.CreationTime = DateTime.Now;
                model.IsDeleted = false;

                if (input.ChannelType == "Twitch")
                {
                    model.LogoIcon = "fab fa-twitch";
                }
                else if (input.ChannelType == "Youtube")
                {
                    model.LogoIcon = "fab fa-youtube";
                }


                #endregion

                #region SaveFinal Changes to database

                await Repository.InsertAsync(model);
                _unitOfWorkManager.Current.SaveChanges();
                return new WatchusListDto() { Id = model.Id, Title = model.Title };
                #endregion
            }
            catch (Exception ex)
            {
                return new WatchusListDto() { Id = 0, Title = String.Empty };
            }
        }

        public override Task<WatchusListDto> UpdateAsync(WatchusUpdateDto input)
        {
            return base.UpdateAsync(input);
        }
    }
}
