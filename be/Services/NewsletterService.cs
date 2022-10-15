using AutoMapper;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Service
{
    public class NewsletterSubscriptionService : INewsletterSubscriptionService
    {
        private readonly INewsletterSubscriptionRepository _newsletterSubscriptionRepository;

        public NewsletterSubscriptionService(INewsletterSubscriptionRepository newsletterSubscriptionRepository)
        {
            _newsletterSubscriptionRepository = newsletterSubscriptionRepository;
        }

        public async Task<List<NewsletterSubscription>> GetNewsletterSubscriptions()
        {
            return await _newsletterSubscriptionRepository.GetNewsletterSubscriptions();
        }

        public async Task<NewsletterSubscription> GetSingleById(int id)
        {
            return await _newsletterSubscriptionRepository.GetById(id);
        }
    }
}