using Microsoft.EntityFrameworkCore;
using MealForFamily.Models;

namespace MealForFamily.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }
        
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<NewsletterSubscription> NewsletterSubscriptions { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<VolunteerActionType> VolunteerActionTypes { get; set; }
        public DbSet<VolunteerActionStatus> VolunteerActionStatuses { get; set; }
        public DbSet<VolunteerAction> VolunteerActions { get; set; }
        public DbSet<AboutUs> AboutUs { get; set; }
        public DbSet<BankAccount> BankAccount { get; set; }
    }
}
