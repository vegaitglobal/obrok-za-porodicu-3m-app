using MealForFamily.Models;
using Microsoft.EntityFrameworkCore;

namespace MealForFamily.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }


        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AboutUs>().HasData(new AboutUs { Id = 1, RawDescription = "", Description = "<h1>About us</h1></br><p>We are organisation meal for families 3M.</p>" });
            modelBuilder.Entity<BankAccount>().HasData(new BankAccount { Id = 1, ReceiverName = "Obrok za porodicu 3M", ReceiverCity = "Novi Sad", ReceiverAddress = "Miše Dimitrijevića 3B", AccountNumber = "160-6000001255298-83", TransactionModel = "", ReferenceNumber = "", PhoneNumber = "(00 381) 60 37-65-017" });
            modelBuilder.Entity<Contact>().HasData(new Contact { Id = 1, Title = "Obrok za porodicu 3M", Email = "obrokzaporodicu3m@gmail.com", PhoneNumber = "(00 381) 60 37-65-017" });

            List<VolunteerActionStatus> statuses = new();
            statuses.Add(new VolunteerActionStatus { Id = 1, Name = "Trenutno u toku" });
            statuses.Add(new VolunteerActionStatus { Id = 2, Name = "Uspešno završena" });

            modelBuilder.Entity<VolunteerActionStatus>().HasData(statuses);

            List<VolunteerActionType> types = new();
            types.Add(new VolunteerActionType { Id = 1, Name = "Hrana", HasPickup = true, HasPayment = false });
            types.Add(new VolunteerActionType { Id = 2, Name = "Novac", HasPickup = false, HasPayment = true });
            types.Add(new VolunteerActionType { Id = 3, Name = "Odeća i obuća", HasPickup = true, HasPayment = false });
            types.Add(new VolunteerActionType { Id = 4, Name = "Igračke", HasPickup = true, HasPayment = false });
            types.Add(new VolunteerActionType { Id = 5, Name = "Ostalo", HasPickup = true, HasPayment = false });

            modelBuilder.Entity<VolunteerActionType>().HasData(types);

            base.OnModelCreating(modelBuilder);
        }


        public DbSet<Contact> Contacts { get; set; }
        public DbSet<NewsletterSubscription> NewsletterSubscriptions { get; set; }
        public DbSet<News> News { get; set; }
        public DbSet<VolunteerActionType> VolunteerActionTypes { get; set; }
        public DbSet<VolunteerActionStatus> VolunteerActionStatuses { get; set; }
        public DbSet<VolunteerAction> VolunteerActions { get; set; }
        public DbSet<AboutUs> AboutUs { get; set; }
        public DbSet<BankAccount> BankAccount { get; set; }
        public DbSet<Donation> Donations { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
