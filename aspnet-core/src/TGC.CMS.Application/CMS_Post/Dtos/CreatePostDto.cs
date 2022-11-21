using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Abp.Domain.Entities;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;

namespace TGC.CMS.CMS_Post.Dtos
{
    public class CreatePostDto
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime PostDate { get; set; }
        public string Prize { get; set; }
        public int? Amount { get; set; }
        public string Elimination { get; set; }
        public int CategoryId { get; set; }
        public int DisplayOrderNo { get; set; }
        public IList<IFormFile> PostImages { get; set; }
    }


    public class UpdatePostDto : CreatePostDto, IEntityDto<int>
    {
        public int Id { get; set; }
    }
}
