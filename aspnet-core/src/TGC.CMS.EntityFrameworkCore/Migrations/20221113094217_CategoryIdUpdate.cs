using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TGC.CMS.Migrations
{
    public partial class CategoryIdUpdate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Posts_CategoryId",
                table: "Posts",
                column: "CategoryId");

            migrationBuilder.AddForeignKey(
                name: "FK_Posts_PostCategories_CategoryId",
                table: "Posts",
                column: "CategoryId",
                principalTable: "PostCategories",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Posts_PostCategories_CategoryId",
                table: "Posts");

            migrationBuilder.DropIndex(
                name: "IX_Posts_CategoryId",
                table: "Posts");
        }
    }
}
