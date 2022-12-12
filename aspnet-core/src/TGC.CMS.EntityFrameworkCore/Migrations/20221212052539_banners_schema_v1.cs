using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TGC.CMS.Migrations
{
    public partial class banners_schema_v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Banners",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FavouriteGameTitle = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FavouriteGameDecription = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    BannerId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HTW_TitleOne = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HTW_TitleTwo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HTW_TitleThree = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HTW_DescriptionOne = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HTW_DescriptionTwo = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HTW_DescriptionThree = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Image = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CreationTime = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CreatorUserId = table.Column<long>(type: "bigint", nullable: true),
                    LastModificationTime = table.Column<DateTime>(type: "datetime2", nullable: true),
                    LastModifierUserId = table.Column<long>(type: "bigint", nullable: true),
                    IsDeleted = table.Column<bool>(type: "bit", nullable: false),
                    DeleterUserId = table.Column<long>(type: "bigint", nullable: true),
                    DeletionTime = table.Column<DateTime>(type: "datetime2", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Banners", x => x.Id);
                });

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationTime",
                value: new DateTime(2022, 12, 12, 10, 25, 39, 3, DateTimeKind.Local).AddTicks(2010));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationTime",
                value: new DateTime(2022, 12, 12, 10, 25, 39, 3, DateTimeKind.Local).AddTicks(2032));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationTime",
                value: new DateTime(2022, 12, 12, 10, 25, 39, 3, DateTimeKind.Local).AddTicks(2042));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationTime",
                value: new DateTime(2022, 12, 12, 10, 25, 39, 3, DateTimeKind.Local).AddTicks(2050));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationTime",
                value: new DateTime(2022, 12, 12, 10, 25, 39, 3, DateTimeKind.Local).AddTicks(2059));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationTime",
                value: new DateTime(2022, 12, 12, 10, 25, 39, 3, DateTimeKind.Local).AddTicks(2076));
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Banners");

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationTime",
                value: new DateTime(2022, 12, 11, 9, 26, 35, 292, DateTimeKind.Local).AddTicks(2629));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationTime",
                value: new DateTime(2022, 12, 11, 9, 26, 35, 292, DateTimeKind.Local).AddTicks(2704));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationTime",
                value: new DateTime(2022, 12, 11, 9, 26, 35, 292, DateTimeKind.Local).AddTicks(2713));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationTime",
                value: new DateTime(2022, 12, 11, 9, 26, 35, 292, DateTimeKind.Local).AddTicks(2720));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationTime",
                value: new DateTime(2022, 12, 11, 9, 26, 35, 292, DateTimeKind.Local).AddTicks(2727));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationTime",
                value: new DateTime(2022, 12, 11, 9, 26, 35, 292, DateTimeKind.Local).AddTicks(2737));
        }
    }
}
