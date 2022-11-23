using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using TGC.CMS.Authorization.Roles;
using TGC.CMS.Authorization.Users;
using TGC.CMS.MultiTenancy;
using TGC.CMS.CMS_Post;
using TGC.CMS.SkinConfig;
using TGC.CMS.Slider;

namespace TGC.CMS.EntityFrameworkCore
{
    public class CMSDbContext : AbpZeroDbContext<Tenant, Role, User, CMSDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public CMSDbContext(DbContextOptions<CMSDbContext> options)
            : base(options)
        {
        }

        public DbSet<Post> Posts { get; set; }
        public DbSet<PostCategory> PostCategories { get; set; }
        public DbSet<PostImage> PostImages { get; set; }
        public DbSet<MainSlider> MainSliders { get; set; }

    // Dashboard

    public DbSet<SkinLabel> skinLabels { get; set; }
        public DbSet<SkinHeader> skinHeaders { get; set; }
        public DbSet<SkinText> skinTexts { get; set; }
        public DbSet<SkinText> SkinSections { get; set; }
        public DbSet< SkinTextHeader> skinTextHeaders { get; set; }

    }
}
