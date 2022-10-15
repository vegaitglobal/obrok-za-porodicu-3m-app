using Microsoft.EntityFrameworkCore;
using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;

namespace MealForFamily.Repositories
{
    public class VolunteerActionRepository : Repository<VolunteerAction>, IVolunteerActionRepository
    {
        public VolunteerActionRepository(DataContext context) : base(context) { }

        public async Task<List<VolunteerAction>> GetVolunteerActions()
        {
            return await _context.VolunteerActions
                .ToListAsync();
        }
    }
}