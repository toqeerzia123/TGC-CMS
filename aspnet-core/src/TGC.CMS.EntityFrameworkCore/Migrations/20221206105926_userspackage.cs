using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TGC.CMS.Migrations
{
    public partial class userspackage : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AbpUserTokens_AbpUsers_UserId",
                table: "AbpUserTokens");

            migrationBuilder.DropForeignKey(
                name: "FK_UserPackages_AbpUsers_UserId",
                table: "UserPackages");

            migrationBuilder.DropForeignKey(
                name: "FK_UserPackages_Packages_PackageId",
                table: "UserPackages");

            migrationBuilder.DropIndex(
                name: "IX_AbpUserTokens_UserId",
                table: "AbpUserTokens");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UserPackages",
                table: "UserPackages");

            migrationBuilder.RenameTable(
                name: "UserPackages",
                newName: "UsersPackage");

            migrationBuilder.RenameIndex(
                name: "IX_UserPackages_UserId",
                table: "UsersPackage",
                newName: "IX_UsersPackage_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_UserPackages_PackageId",
                table: "UsersPackage",
                newName: "IX_UsersPackage_PackageId");

            migrationBuilder.AddColumn<string>(
                name: "Tokens",
                table: "AbpUsers",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_UsersPackage",
                table: "UsersPackage",
                column: "Id");

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationTime",
                value: new DateTime(2022, 12, 6, 15, 59, 25, 773, DateTimeKind.Local).AddTicks(514));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationTime",
                value: new DateTime(2022, 12, 6, 15, 59, 25, 773, DateTimeKind.Local).AddTicks(540));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationTime",
                value: new DateTime(2022, 12, 6, 15, 59, 25, 773, DateTimeKind.Local).AddTicks(551));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationTime",
                value: new DateTime(2022, 12, 6, 15, 59, 25, 773, DateTimeKind.Local).AddTicks(560));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationTime",
                value: new DateTime(2022, 12, 6, 15, 59, 25, 773, DateTimeKind.Local).AddTicks(570));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationTime",
                value: new DateTime(2022, 12, 6, 15, 59, 25, 773, DateTimeKind.Local).AddTicks(592));

            migrationBuilder.AddForeignKey(
                name: "FK_UsersPackage_AbpUsers_UserId",
                table: "UsersPackage",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UsersPackage_Packages_PackageId",
                table: "UsersPackage",
                column: "PackageId",
                principalTable: "Packages",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_UsersPackage_AbpUsers_UserId",
                table: "UsersPackage");

            migrationBuilder.DropForeignKey(
                name: "FK_UsersPackage_Packages_PackageId",
                table: "UsersPackage");

            migrationBuilder.DropPrimaryKey(
                name: "PK_UsersPackage",
                table: "UsersPackage");

            migrationBuilder.DropColumn(
                name: "Tokens",
                table: "AbpUsers");

            migrationBuilder.RenameTable(
                name: "UsersPackage",
                newName: "UserPackages");

            migrationBuilder.RenameIndex(
                name: "IX_UsersPackage_UserId",
                table: "UserPackages",
                newName: "IX_UserPackages_UserId");

            migrationBuilder.RenameIndex(
                name: "IX_UsersPackage_PackageId",
                table: "UserPackages",
                newName: "IX_UserPackages_PackageId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_UserPackages",
                table: "UserPackages",
                column: "Id");

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 1,
                column: "CreationTime",
                value: new DateTime(2022, 12, 1, 2, 11, 6, 713, DateTimeKind.Local).AddTicks(5280));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 2,
                column: "CreationTime",
                value: new DateTime(2022, 12, 1, 2, 11, 6, 713, DateTimeKind.Local).AddTicks(5308));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 3,
                column: "CreationTime",
                value: new DateTime(2022, 12, 1, 2, 11, 6, 713, DateTimeKind.Local).AddTicks(5319));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 4,
                column: "CreationTime",
                value: new DateTime(2022, 12, 1, 2, 11, 6, 713, DateTimeKind.Local).AddTicks(5331));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 5,
                column: "CreationTime",
                value: new DateTime(2022, 12, 1, 2, 11, 6, 713, DateTimeKind.Local).AddTicks(5341));

            migrationBuilder.UpdateData(
                table: "PostCategories",
                keyColumn: "Id",
                keyValue: 6,
                column: "CreationTime",
                value: new DateTime(2022, 12, 1, 2, 11, 6, 713, DateTimeKind.Local).AddTicks(5401));

            migrationBuilder.CreateIndex(
                name: "IX_AbpUserTokens_UserId",
                table: "AbpUserTokens",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_AbpUserTokens_AbpUsers_UserId",
                table: "AbpUserTokens",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserPackages_AbpUsers_UserId",
                table: "UserPackages",
                column: "UserId",
                principalTable: "AbpUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_UserPackages_Packages_PackageId",
                table: "UserPackages",
                column: "PackageId",
                principalTable: "Packages",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
