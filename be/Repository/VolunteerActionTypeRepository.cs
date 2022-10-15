using Microsoft.EntityFrameworkCore;
using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;

namespace MealForFamily.Repositories
{
    public class VolunteerActionTypeRepository : Repository<VolunteerActionType>, IVolunteerActionTypeRepository
    {
        public VolunteerActionTypeRepository(DataContext context) : base(context) { }

        public async Task<List<VolunteerActionType>> GetVolunteerActionTypes()
        {
            return await _context.VolunteerActionTypes
                .ToListAsync();
        }
        
        public async Task<VolunteerActionType> GetSingleById(int id)
        {
            return await _context.VolunteerActionTypes.Where(x => x.Id == id).FirstOrDefaultAsync();
        }
    }
}