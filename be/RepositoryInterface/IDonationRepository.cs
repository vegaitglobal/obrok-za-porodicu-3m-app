using MealForFamily.Models;

namespace MealForFamily.RepositoryInterface
{
    public interface IDonationRepository : IRepository<Donation>
    {
        Task<List<Donation>> GetDonations();

        Task<Donation?> GetSingleById(int id);
    }
}
