using Microsoft.EntityFrameworkCore;
using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;

namespace MealForFamily.Repositories
{
    public class NewsRepository : Repository<News>, INewsRepository
    {
        public NewsRepository(DataContext context) : base(context) { }

        public async Task<News> GetSingleById(int id)
        {
            return await _context.News.Where(x => x.Id == id).FirstOrDefaultAsync();
        }
    }
}
