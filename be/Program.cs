using Microsoft.EntityFrameworkCore;
using MealForFamily.Data;
using MealForFamily.Repositories;
using MealForFamily.RepositoryInterface;
using MealForFamily.Service;
using MealForFamily.ServiceInterface;

var builder = WebApplication.CreateBuilder(args);
builder.Configuration.AddJsonFile("appsettings.json", false, true);
builder.Configuration.AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", optional: true);
builder.Configuration.AddEnvironmentVariables();

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddTransient<IContactService, ContactService>();
builder.Services.AddTransient<IContactRepository, ContactRepository>();
builder.Services.AddTransient<INewsletterSubscriptionService, NewsletterSubscriptionService>();
builder.Services.AddTransient<INewsletterSubscriptionRepository, NewsletterSubscriptionRepository>();
builder.Services.AddTransient<INewsService, NewsService>();
builder.Services.AddTransient<INewsRepository, NewsRepository>();

builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

builder.Services.AddDbContext<DataContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
AppContext.SetSwitch("Npgsql.EnableLegacyTimestampBehavior", true);

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var services = scope.ServiceProvider;

    var context = services.GetRequiredService<DataContext>();
    context.Database.Migrate();
}

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
