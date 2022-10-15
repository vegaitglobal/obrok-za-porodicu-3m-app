using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using Microsoft.EntityFrameworkCore;

namespace MealForFamily.Repositories
{
    public class VolunteerActionRepository : Repository<VolunteerAction>, IVolunteerActionRepository
    {
        public VolunteerActionRepository(DataContext context) : base(context) { }

        public async Task<List<VolunteerAction>> GetVolunteerActions()
        {
            return await _context.VolunteerActions
                .Include(v => v.Type)
                .Include(v => v.Status)
                .ToListAsync();
        }

        public async Task<VolunteerAction> GetSingleById(int id)
        {
            return await _context.VolunteerActions
                .Include(v => v.Type)
                .Include(v => v.Status)
                .Where(x => x.Id == id).FirstOrDefaultAsync();
        }

        public new async Task<Page<VolunteerAction>> GetAllByPage(int pageNumber, int pageSize)
        {
            // TODO: Optimize count query
            int totalCount = _context.VolunteerActions.Count();

            // TODO: Add OrderBy
            IEnumerable<VolunteerAction> content = await _context.Set<VolunteerAction>().Include(v => v.Type).Include(v => v.Status).Skip(GetNumberOfElements(pageNumber, pageSize)).Take(pageSize).ToListAsync();

            return createPage(pageNumber, pageSize, totalCount, content);
        }
    }
}
