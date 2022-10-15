using Microsoft.EntityFrameworkCore;
using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;

namespace MealForFamily.Repositories
{
    public class NewsRepository : Repository<News>, INewsRepository
    {
        public NewsRepository(DataContext context) : base(context) { }

        public async Task<List<News>> GetNews()
        {
            return await _context.News
                .ToListAsync();
        }
    }
}