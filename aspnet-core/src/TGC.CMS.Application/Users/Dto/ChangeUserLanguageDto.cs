using System.ComponentModel.DataAnnotations;

namespace TGC.CMS.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}