using Abp.Application.Services;
using Microsoft.AspNetCore.Http;
using System.Threading.Tasks;
using TGC.CMS.Publicity.Dtos;

namespace TGC.CMS.Publicity
{
    public interface IAdvertAppService : IAsyncCrudAppService<AdvertListDto, int, AdvertResultRequestDto, AdvertCreateDto, AdvertUpdateDto>
    {
        //Task<List<PostDto>> GetAllPostsByCategory(PagedPostResultRequestDto input);
    }
}
