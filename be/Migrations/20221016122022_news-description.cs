using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MealForFamily.Migrations
{
    public partial class newsdescription : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RawDescrition",
                table: "News",
                newName: "RawDescription");

            migrationBuilder.RenameColumn(
                name: "Descrition",
                table: "News",
                newName: "Description");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "RawDescription",
                table: "News",
                newName: "RawDescrition");

            migrationBuilder.RenameColumn(
                name: "Description",
                table: "News",
                newName: "Descrition");
        }
    }
}
