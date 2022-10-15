using Microsoft.EntityFrameworkCore;
using MealForFamily.Models;

namespace MealForFamily.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options) { }

        public DbSet<Contact> Contacts { get; set; }
    }
}
