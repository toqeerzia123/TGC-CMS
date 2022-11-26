using Abp.Application.Services.Dto;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post.Dtos;

namespace TGC.CMS.Slider.Dto
{
  public class CreateSliderDto
  {
    public string ImagePath { get; set; }
    public IFormFile Image { get; set; }
    public bool IsActive { get; set; }
    public int OrderNO { get; set; }

    public string Title { get; set; }
    public string Description { get; set; }
  }
  public class UpdateSliderDto : CreateSliderDto, IEntityDto<int>
  {
    public int Id { get; set; }
  }
}
