using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TGC.CMS.Migrations
{
    public partial class SkinConfig : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "skinHeaders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SkinName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Logo = table.Column<int>(type: "int", nullable: false),
                    SmallImage = table.Column<int>(type: "int", nullable: false),
                    BannerImage = table.Column<int>(type: "int", nullable: false),
                    FaviconId = table.Column<int>(type: "int", nullable: true),
                    PrimaryColour = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecondaryColour = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    HeaderColour = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FooterColour = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PrimaryTextColour = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecondaryTextColour = table.Column<string>(type: "nvarchar(max)", nullable: true),
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
                    table.PrimaryKey("PK_skinHeaders", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "skinLabels",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SkinId = table.Column<int>(type: "int", nullable: true),
                    LanguageId = table.Column<int>(type: "int", nullable: true),
                    FieldId = table.Column<int>(type: "int", nullable: true),
                    FieldText = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    FieldName = table.Column<string>(type: "nvarchar(max)", nullable: true),
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
                    table.PrimaryKey("PK_skinLabels", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "SkinText",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    LanguageId = table.Column<int>(type: "int", nullable: true),
                    SectionId = table.Column<int>(type: "int", nullable: true),
                    SectionText = table.Column<string>(type: "nvarchar(max)", nullable: true),
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
                    table.PrimaryKey("PK_SkinText", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "skinTextHeaders",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    SkinTextName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SkinId = table.Column<int>(type: "int", nullable: true),
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
                    table.PrimaryKey("PK_skinTextHeaders", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "skinHeaders");

            migrationBuilder.DropTable(
                name: "skinLabels");

            migrationBuilder.DropTable(
                name: "SkinText");

            migrationBuilder.DropTable(
                name: "skinTextHeaders");
        }
    }
}
