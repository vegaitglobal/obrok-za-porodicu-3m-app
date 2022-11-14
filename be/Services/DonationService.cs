using MealForFamily.Helpers.Exceptions;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Service
{
    public class DonationService : IDonationService
    {
        private readonly IDonationRepository _donationRepository;
        private readonly IEmailSendingService _emailSendingService;
        private readonly IThankYouEmailSendingService _thankYouEmailSendingService;

        public DonationService(IDonationRepository donationRepository, IThankYouEmailSendingService thankYouEmailSendingService, IEmailSendingService emailSendingService)
        {
            _donationRepository = donationRepository;
            _emailSendingService = emailSendingService;
            _thankYouEmailSendingService = thankYouEmailSendingService;
        }

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

        public async Task<Donation> CreateDonation(Donation newDonation)
        {
            Donation donation = await _donationRepository.Create(newDonation);
            await _thankYouEmailSendingService.ThankDonator(donation);
            return donation;
        }

        public async Task<Donation> UpdateDonation(Donation donation)
        {
            return await _donationRepository.Update(donation);
        }

        public async Task DeleteDonation(int id)
        {
            Donation donation = await _donationRepository.GetById(id);
            if (donation == null)
                throw new CustomException("Donation not found", 404);

            donation.IsDeleted = true;
            await _donationRepository.Update(donation);
        }
    }
}
