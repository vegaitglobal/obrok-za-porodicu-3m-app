using AutoMapper;
using MealForFamily.Helpers.Exceptions;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Service
{
    public class DonationService : IDonationService
    {
        private readonly IDonationRepository _donationRepository;
        private readonly IMapper _mapper;

        public DonationService(IDonationRepository donationRepository, IMapper mapper)
        {
            _donationRepository = donationRepository;
            _mapper = mapper;

        public async Task<List<Donation>> GetDonations()
        {
            return await _donationRepository.GetDonations();
        }

        public async Task<Donation> GetSingleById(int id)
        {
            Donation? donation = await _donationRepository.GetSingleById(id);
            if (donation == null)
                throw new CustomException("Donation not found", 404);

            return donation;
        }

        public async Task<Donation> CreateDonation(Donation donation)
        {
            return await _donationRepository.Create(donation);
        }

        public async Task<Donation> UpdateDonation(Donation donation)
        {
            return await _donationRepository.Update(donation);
        }
    }
}
