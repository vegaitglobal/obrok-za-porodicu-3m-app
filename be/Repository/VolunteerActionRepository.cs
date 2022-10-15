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
    }
}
