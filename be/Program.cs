using MealForFamily.Authorization;
using MealForFamily.Data;
using MealForFamily.Helpers;
using MealForFamily.Helpers.Exceptions;
using MealForFamily.Repositories;
using MealForFamily.Repository;
using MealForFamily.RepositoryInterface;
using MealForFamily.Service;
using MealForFamily.ServiceInterface;
using MealForFamily.ServiceInterfaces;
using MealForFamily.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddJsonFile("appsettings.json", false, true);
builder.Configuration.AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", optional: true);
builder.Configuration.AddEnvironmentVariables();

// Add services to the container.

builder.Services.AddControllers();
builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

builder.Services.AddTransient<IJwtUtils, JwtUtils>();

builder.Services.AddTransient<IContactService, ContactService>();
builder.Services.AddTransient<IContactRepository, ContactRepository>();

builder.Services.AddTransient<INewsletterSubscriptionService, NewsletterSubscriptionService>();
builder.Services.AddTransient<INewsletterSubscriptionRepository, NewsletterSubscriptionRepository>();

builder.Services.AddTransient<INewsService, NewsService>();
builder.Services.AddTransient<INewsRepository, NewsRepository>();

builder.Services.AddTransient<IVolunteerActionTypeService, VolunteerActionTypeService>();
builder.Services.AddTransient<IVolunteerActionTypeRepository, VolunteerActionTypeRepository>();

builder.Services.AddTransient<IVolunteerActionStatusService, VolunteerActionStatusService>();
builder.Services.AddTransient<IVolunteerActionStatusRepository, VolunteerActionStatusRepository>();

builder.Services.AddTransient<IVolunteerActionService, VolunteerActionService>();
builder.Services.AddTransient<IVolunteerActionRepository, VolunteerActionRepository>();

builder.Services.AddTransient<IAboutUsService, AboutUsService>();
builder.Services.AddTransient<IAboutUsRepository, AboutUsRepository>();

builder.Services.AddTransient<IBankAccountService, BankAccountService>();
builder.Services.AddTransient<IBankAccountRepository, BankAccountRepository>();

builder.Services.AddTransient<IDonationService, DonationService>();
builder.Services.AddTransient<IDonationRepository, DonationRepository>();

builder.Services.AddTransient<IUserRepository, UserRepository>();
builder.Services.AddTransient<IUserService, UserService>();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddDbContext<DataContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    var context = services.GetRequiredService<DataContext>();
    context.Database.Migrate();
}

// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
app.UseSwagger();
app.UseSwaggerUI();
app.UseCors(x => x
    .SetIsOriginAllowed(origin => true)
    .AllowAnyMethod()
    .AllowAnyHeader()
    .AllowCredentials());
//}

app.UseMiddleware<ExceptionHandlerMiddleware>();
app.UseMiddleware<JwtMiddleware>();

app.MapControllers();
app.Run();
