using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface IDonationService
    {
        Task<List<Donation>> GetDonations();

        Task<Donation> GetSingleById(int id);

        Task<Donation> CreateDonation(Donation contact);

        Task<Donation> UpdateDonation(Donation contact);
        Task DeleteDonation(int id);
    }
}
