using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using TGC.CMS.Authorization.Roles;
using TGC.CMS.Authorization.Users;
using TGC.CMS.MultiTenancy;
using TGC.CMS.CMS_Post;
using TGC.CMS.SkinConfig;
using TGC.CMS.Slider;
using TGC.CMS.PromotionalText;
using TGC.CMS.Invite;
using TGC.CMS.Packages;
using System;

namespace TGC.CMS.EntityFrameworkCore
{
    public class CMSDbContext : AbpZeroDbContext<Tenant, Role, User, CMSDbContext>
    {
        /* Define a DbSet for each entity of the application */
        public CMSDbContext(DbContextOptions<CMSDbContext> options)
            : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PostCategory>().HasData(new PostCategory
            {
                Id = 1,
                CategoryName = "Tournaments",
                CreationTime = DateTime.Now,
                IsDeleted = false
            });
            modelBuilder.Entity<PostCategory>().HasData(new PostCategory
            {
                Id = 2,
                CategoryName = "Games",
                CreationTime = DateTime.Now,
                IsDeleted = false
            });
            modelBuilder.Entity<PostCategory>().HasData(new PostCategory
            {
                Id = 3,
                CategoryName = "Announcements",
                CreationTime = DateTime.Now,
                IsDeleted = false
            });
            modelBuilder.Entity<PostCategory>().HasData(new PostCategory
            {
                Id = 4,
                CategoryName = "Blogs",
                CreationTime = DateTime.Now,
                IsDeleted = false
            });
            modelBuilder.Entity<PostCategory>().HasData(new PostCategory
            {
                Id = 5,
                CategoryName = "WatchUs",
                CreationTime = DateTime.Now,
                IsDeleted = false
            });
            modelBuilder.Entity<PostCategory>().HasData(new PostCategory
            {
                Id = 6,
                CategoryName = "Articles",
                CreationTime = DateTime.Now,
                IsDeleted = false
            });
            base.OnModelCreating(modelBuilder);
        }
        public DbSet<Post> Posts { get; set; }
        public DbSet<PostCategory> PostCategories { get; set; }
        public DbSet<PostImage> PostImages { get; set; }
        public DbSet<MainSlider> MainSliders { get; set; }
        public DbSet<Package> Packages { get; set; }
        public DbSet<UserPackage> UsersPackage { get; set; }

        // Dashboard

        //CMS
        public DbSet<InviteFriend> InviteFriends { get; set; }
        public DbSet<Promotion> Promotions { get; set; }
        public DbSet<SocialICon> SocialICons { get; set; }

        public DbSet<SocialICon> skinLabels { get; set; }
        public DbSet<SkinHeader> skinHeaders { get; set; }
        public DbSet<SkinText> skinTexts { get; set; }
        public DbSet<SkinText> SkinSections { get; set; }
        public DbSet<SkinTextHeader> skinTextHeaders { get; set; }

    }
}
