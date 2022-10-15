using Microsoft.EntityFrameworkCore;
using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;

namespace MealForFamily.Repositories
{
    public class AboutUsRepository : Repository<AboutUs>, IAboutUsRepository
    {
        public AboutUsRepository(DataContext context) : base(context) { }

        public async Task<AboutUs> GetAboutUs()
        {
            return await _context.AboutUs.FirstOrDefaultAsync();
        }
    }
}
