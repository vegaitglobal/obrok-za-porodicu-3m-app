using Microsoft.EntityFrameworkCore;
using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;

namespace MealForFamily.Repositories
{
    public class VolunteerActionStatusRepository : Repository<VolunteerActionStatus>, IVolunteerActionStatusRepository
    {
        public VolunteerActionStatusRepository(DataContext context) : base(context) { }

        public async Task<List<VolunteerActionStatus>> GetVolunteerActionStatuses()
        {
            return await _context.VolunteerActionStatuses
                .ToListAsync();
        }
        
        public async Task<VolunteerActionStatus> GetSingleById(int id)
        {
            return await _context.VolunteerActionStatuses.Where(x => x.Id == id).FirstOrDefaultAsync();
        }
    }
}
