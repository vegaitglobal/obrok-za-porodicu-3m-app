using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using Microsoft.EntityFrameworkCore;

namespace MealForFamily.Repositories
{
    public class DonationRepository : Repository<Donation>, IDonationRepository
    {
        public DonationRepository(DataContext context) : base(context) { }

        public async Task<List<Donation>> GetDonations()
        {
            return await _context.Donations.Include(d => d.VolunteerAction)
                .Where(d => d.IsDeleted == false)
                .ToListAsync();
        }

        public async Task<Donation?> GetSingleById(int id)
        {
            return await _context.Donations
                .Include(d => d.VolunteerAction)
                .Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefaultAsync();
        }
    }
}