using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace MealForFamily.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AboutUs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    RawDescription = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AboutUs", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "BankAccount",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ReceiverName = table.Column<string>(type: "text", nullable: false),
                    ReceiverCity = table.Column<string>(type: "text", nullable: false),
                    ReceiverAddress = table.Column<string>(type: "text", nullable: false),
                    AccountNumber = table.Column<string>(type: "text", nullable: false),
                    TransactionModel = table.Column<string>(type: "text", nullable: true),
                    ReferenceNumber = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BankAccount", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Contacts",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Title = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Contacts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "News",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    ImageURL = table.Column<string>(type: "text", nullable: false),
                    Title = table.Column<string>(type: "text", nullable: false),
                    ShortDescription = table.Column<string>(type: "text", nullable: true),
                    RawDescrition = table.Column<string>(type: "text", nullable: true),
                    Descrition = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_News", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "NewsletterSubscriptions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Email = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NewsletterSubscriptions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VolunteerActionStatuses",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VolunteerActionStatuses", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VolunteerActionTypes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    Name = table.Column<string>(type: "text", nullable: false),
                    HasPickup = table.Column<bool>(type: "boolean", nullable: true),
                    HasPayment = table.Column<bool>(type: "boolean", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VolunteerActionTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "VolunteerActions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    TypeId = table.Column<int>(type: "integer", nullable: false),
                    ImageURL = table.Column<string>(type: "text", nullable: true),
                    Title = table.Column<string>(type: "text", nullable: false),
                    StatusId = table.Column<int>(type: "integer", nullable: false),
                    ShortDescription = table.Column<string>(type: "text", nullable: true),
                    RawDescription = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true),
                    ReferenceNumber = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_VolunteerActions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_VolunteerActions_VolunteerActionStatuses_StatusId",
                        column: x => x.StatusId,
                        principalTable: "VolunteerActionStatuses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_VolunteerActions_VolunteerActionTypes_TypeId",
                        column: x => x.TypeId,
                        principalTable: "VolunteerActionTypes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Donations",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    VolunteerActionTypeId = table.Column<int>(type: "integer", nullable: true),
                    IsCompany = table.Column<bool>(type: "boolean", nullable: true),
                    CompanyName = table.Column<string>(type: "text", nullable: true),
                    FullName = table.Column<string>(type: "text", nullable: false),
                    Email = table.Column<string>(type: "text", nullable: false),
                    PhoneNumber = table.Column<string>(type: "text", nullable: false),
                    Description = table.Column<string>(type: "text", nullable: true),
                    IsPickup = table.Column<bool>(type: "boolean", nullable: true),
                    Address = table.Column<string>(type: "text", nullable: true),
                    VolunteerActionId = table.Column<int>(type: "integer", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Donations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Donations_VolunteerActions_VolunteerActionId",
                        column: x => x.VolunteerActionId,
                        principalTable: "VolunteerActions",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Donations_VolunteerActionTypes_VolunteerActionTypeId",
                        column: x => x.VolunteerActionTypeId,
                        principalTable: "VolunteerActionTypes",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "AboutUs",
                columns: new[] { "Id", "Description", "RawDescription" },
                values: new object[] { 1, "<h1>About us</h1></br><p>We are organisation meal for families 3M.</p>", "" });

            migrationBuilder.InsertData(
                table: "BankAccount",
                columns: new[] { "Id", "AccountNumber", "PhoneNumber", "ReceiverAddress", "ReceiverCity", "ReceiverName", "ReferenceNumber", "TransactionModel" },
                values: new object[] { 1, "160-6000001255298-83", "(00 381) 60 37-65-017", "Miše Dimitrijevića 3B", "Novi Sad", "Obrok za porodicu 3M", "", "" });

            migrationBuilder.InsertData(
                table: "Contacts",
                columns: new[] { "Id", "Email", "PhoneNumber", "Title" },
                values: new object[] { 1, "obrokzaporodicu3m@gmail.com", "(00 381) 60 37-65-017", "Obrok za porodicu 3M" });

            migrationBuilder.InsertData(
                table: "VolunteerActionStatuses",
                columns: new[] { "Id", "Name" },
                values: new object[,]
                {
                    { 1, "Trenutno u toku" },
                    { 2, "Uspešno završena" }
                });

            migrationBuilder.InsertData(
                table: "VolunteerActionTypes",
                columns: new[] { "Id", "HasPayment", "HasPickup", "Name" },
                values: new object[,]
                {
                    { 1, false, true, "Hrana" },
                    { 2, true, false, "Novac" },
                    { 3, false, true, "Odeća i obuća" },
                    { 4, false, true, "Igračke" },
                    { 5, false, true, "Ostalo" }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Donations_VolunteerActionId",
                table: "Donations",
                column: "VolunteerActionId");

            migrationBuilder.CreateIndex(
                name: "IX_Donations_VolunteerActionTypeId",
                table: "Donations",
                column: "VolunteerActionTypeId");

            migrationBuilder.CreateIndex(
                name: "IX_VolunteerActions_StatusId",
                table: "VolunteerActions",
                column: "StatusId");

            migrationBuilder.CreateIndex(
                name: "IX_VolunteerActions_TypeId",
                table: "VolunteerActions",
                column: "TypeId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AboutUs");

            migrationBuilder.DropTable(
                name: "BankAccount");

            migrationBuilder.DropTable(
                name: "Contacts");

            migrationBuilder.DropTable(
                name: "Donations");

            migrationBuilder.DropTable(
                name: "News");

            migrationBuilder.DropTable(
                name: "NewsletterSubscriptions");

            migrationBuilder.DropTable(
                name: "VolunteerActions");

            migrationBuilder.DropTable(
                name: "VolunteerActionStatuses");

            migrationBuilder.DropTable(
                name: "VolunteerActionTypes");
        }
    }
}
