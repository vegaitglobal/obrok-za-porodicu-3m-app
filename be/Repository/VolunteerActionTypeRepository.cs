using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using Microsoft.EntityFrameworkCore;

namespace MealForFamily.Repositories
{
    public class VolunteerActionTypeRepository : Repository<VolunteerActionType>, IVolunteerActionTypeRepository
    {
        public VolunteerActionTypeRepository(DataContext context) : base(context) { }

        public async Task<List<VolunteerActionType>> GetVolunteerActionTypes()
        {
            return await _context.VolunteerActionTypes.Where(v => v.IsDeleted == false)
                .ToListAsync();
        }

        public async Task<VolunteerActionType> GetSingleById(int id)
        {
            return await _context.VolunteerActionTypes.Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefaultAsync();
        }
    }
}
