using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;
using Microsoft.OpenApi.Models;
using MealForFamily.Models;

namespace MealForFamily;

public class Startup 
{
    public Startup(IConfiguration configuration)
    {
        Configuration = configuration;
    }

    public IConfiguration Configuration { get; }

    public void ConfigureServices(IServiceCollection services)
    {
        var connectionString = Environment.GetEnvironmentVariable("DB_CONNECTION_STRING");
        services.AddDbContext<MealForFamilyDbContext>(options =>
            options.UseNpgsql(
                connectionString
            )
        );

        services.AddMvc(option => option.EnableEndpointRouting = false).SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo
                {
                    Title = "Web API",
                    Version = "v1",
                    Description = "ASP.NET Core Web API with Docker and PostgreSql"
                });
            });
    }

    public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
    {
        if (env.IsDevelopment())
        {
            app.UseDeveloperExceptionPage();
        }
        else
        {
            app.UseHsts();
        }

        app.UseSwagger();

        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "Web API V1");
        });
        app.UseMvc();
    }
}
