using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using Microsoft.EntityFrameworkCore;

namespace MealForFamily.Repositories
{
    public class NewsRepository : Repository<News>, INewsRepository
    {
        public NewsRepository(DataContext context) : base(context) { }

        public async Task<News> GetSingleById(int id)
        {
            return await _context.News.Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefaultAsync();
        }

        public new async Task<Page<News>> GetAllByPage(int pageNumber, int pageSize)
        {
            // TODO: Optimize count query
            int totalCount = _context.Set<News>().Where(n => n.IsDeleted == false).Count();

            // TODO: Add OrderBy
            IEnumerable<News> content = await _context.Set<News>()
                .Where(n => n.IsDeleted == false)
                .OrderByDescending(p => p.Id)
                .Skip(GetNumberOfElements(pageNumber, pageSize))
                .Take(pageSize)
                .ToListAsync();

            return createPage(pageNumber, pageSize, totalCount, content);
        }
    }
}
