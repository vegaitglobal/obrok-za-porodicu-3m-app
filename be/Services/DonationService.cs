using AutoMapper;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Service
{
    public class DonationService : IDonationService
    {
        private readonly IDonationRepository _donationRepository;

        public DonationService(IDonationRepository donationRepository)
        {
            _donationRepository = donationRepository;
        }

        public async Task<List<Donation>> GetDonations()
        {
            return await _donationRepository.GetDonations();
        }

        public async Task<Donation> GetSingleById(int id)
        {
            return await _donationRepository.GetById(id);
        }

        public async Task<Donation> CreateDonation(Donation donation) {
            return await _donationRepository.Create(donation);
        }

        public async Task<Donation> UpdateDonation(Donation donation) {
            return await _donationRepository.Update(donation);
        }
    }
}
