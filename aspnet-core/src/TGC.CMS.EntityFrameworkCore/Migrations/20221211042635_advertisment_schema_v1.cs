using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TGC.CMS.Migrations
{
    public partial class advertisment_schema_v1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Advertisements",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImageUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AdvId = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ChannelUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Icon = table.Column<string>(type: "nvarchar(max)", nullable: true),
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
                    table.PrimaryKey("PK_Advertisements", x => x.Id);
                });

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Advertisements");

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationTime",
                value: new DateTime(2022, 12, 10, 2, 11, 37, 697, DateTimeKind.Local).AddTicks(5153));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationTime",
                value: new DateTime(2022, 12, 10, 2, 11, 37, 697, DateTimeKind.Local).AddTicks(5176));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationTime",
                value: new DateTime(2022, 12, 10, 2, 11, 37, 697, DateTimeKind.Local).AddTicks(5183));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationTime",
                value: new DateTime(2022, 12, 10, 2, 11, 37, 697, DateTimeKind.Local).AddTicks(5189));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationTime",
                value: new DateTime(2022, 12, 10, 2, 11, 37, 697, DateTimeKind.Local).AddTicks(5196));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationTime",
                value: new DateTime(2022, 12, 10, 2, 11, 37, 697, DateTimeKind.Local).AddTicks(5249));
        }
    }
}
