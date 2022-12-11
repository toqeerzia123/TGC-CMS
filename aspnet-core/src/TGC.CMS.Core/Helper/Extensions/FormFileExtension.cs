using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using TGC.CMS.CMS_Post;
using TGC.CMS.Publicity;

namespace TGC.CMS.Helper.Extensions
{
    public static class FormFileExtension
    {
        public static List<PostImage> SaveFile(this IList<IFormFile> formFiles, string directoryPath)
        {
            int iteration = 1;
            List<PostImage> localImages = new List<PostImage>();
            foreach (var item in formFiles)
            {
                if (item.Length > 0)
                {
                    var Filename = DateTime.Now.ToString("yyyyMMddHHmmssfff").ToString() + "_" + item.FileName;
                    var filePath = Path.Combine(directoryPath, Filename);

                    if (!Directory.Exists(directoryPath))
                    {
                        Directory.CreateDirectory(directoryPath);
                    }

                    using (var fileStream = new FileStream(filePath, FileMode.Create))
                    {
                        item.CopyTo(fileStream);
                    }
                    PostImage img = new PostImage();
                    img.ImageUrl = Filename;
                    img.IsPrimaryImage = iteration > 1 ? false : true;
                    localImages.Add(img);
                }
                iteration++;
            }

            return localImages;
        }

    }
}
