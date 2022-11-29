using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TGC.CMS.Migrations
{
    public partial class Abp_Custom_Seeder_11 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {

            migrationBuilder.InsertData(
                table: "PostCategories",
                columns: new[] { "Id", "CategoryName", "CreationTime", "CreatorUserId", "DeleterUserId", "DeletionTime", "IsDeleted", "LastModificationTime", "LastModifierUserId" },
                values: new object[,]
                {
                    { 1, "Tournaments", new DateTime(2022, 11, 28, 20, 7, 6, 490, DateTimeKind.Local).AddTicks(4275), null, null, null, false, null, null },
                    { 2, "Games", new DateTime(2022, 11, 28, 20, 7, 6, 490, DateTimeKind.Local).AddTicks(4300), null, null, null, false, null, null },
                    { 3, "Announcements", new DateTime(2022, 11, 28, 20, 7, 6, 490, DateTimeKind.Local).AddTicks(4309), null, null, null, false, null, null },
                    { 4, "Blogs", new DateTime(2022, 11, 28, 20, 7, 6, 490, DateTimeKind.Local).AddTicks(4319), null, null, null, false, null, null },
                    { 5, "WatchUs", new DateTime(2022, 11, 28, 20, 7, 6, 490, DateTimeKind.Local).AddTicks(4328), null, null, null, false, null, null },
                    { 6, "Articles", new DateTime(2022, 11, 28, 20, 7, 6, 490, DateTimeKind.Local).AddTicks(4347), null, null, null, false, null, null }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.DeleteData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 3);

            migrationBuilder.DeleteData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 4);

            migrationBuilder.DeleteData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 5);

            migrationBuilder.DeleteData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 6);
        }
    }
}
