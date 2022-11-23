using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TGC.CMS.Migrations
{
    public partial class slider : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "CreationTime",
                table: "MainSliders",
                type: "datetime2",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<long>(
                name: "CreatorUserId",
                table: "MainSliders",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "DeleterUserId",
                table: "MainSliders",
                type: "bigint",
                nullable: true);

            migrationBuilder.AddColumn<DateTime>(
                name: "DeletionTime",
                table: "MainSliders",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "IsDeleted",
                table: "MainSliders",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<DateTime>(
                name: "LastModificationTime",
                table: "MainSliders",
                type: "datetime2",
                nullable: true);

            migrationBuilder.AddColumn<long>(
                name: "LastModifierUserId",
                table: "MainSliders",
                type: "bigint",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CreationTime",
                table: "MainSliders");

            migrationBuilder.DropColumn(
                name: "CreatorUserId",
                table: "MainSliders");

            migrationBuilder.DropColumn(
                name: "DeleterUserId",
                table: "MainSliders");

            migrationBuilder.DropColumn(
                name: "DeletionTime",
                table: "MainSliders");

            migrationBuilder.DropColumn(
                name: "IsDeleted",
                table: "MainSliders");

            migrationBuilder.DropColumn(
                name: "LastModificationTime",
                table: "MainSliders");

            migrationBuilder.DropColumn(
                name: "LastModifierUserId",
                table: "MainSliders");
        }
    }
}
