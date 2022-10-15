using Microsoft.EntityFrameworkCore;
using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;

namespace MealForFamily.Repositories
{
    public class DonationRepository : Repository<Donation>, IDonationRepository
    {
        public DonationRepository(DataContext context) : base(context) { }

        public async Task<List<Donation>> GetDonations()
        {
            return await _context.Donations
                .ToListAsync();
        }

        public async Task<Donation> GetSingleById(int id)
        {
            return await _context.Donations.Where(x => x.Id == id).FirstOrDefaultAsync();
        }
    }
}