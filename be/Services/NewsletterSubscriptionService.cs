using MealForFamily.Helpers.Exceptions;
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
            NewsletterSubscription subscription = await _newsletterSubscriptionRepository.GetSingleById(id);
            if (subscription == null)
                throw new CustomException("Newsletter subscription not found", 404);

            return subscription;
        }

        public async Task<NewsletterSubscription> CreateNewsletterSubscription(NewsletterSubscription ns)
        {
            NewsletterSubscription? subscription = await _newsletterSubscriptionRepository.GetByEmail(ns.Email);
            if (subscription != null)
                throw new CustomException("Email already subscribed to newsletter", 400);

            return await _newsletterSubscriptionRepository.Create(ns);
        }

        public async Task<NewsletterSubscription> UpdateNewsletterSubscription(NewsletterSubscription ns)
        {
            return await _newsletterSubscriptionRepository.Update(ns);
        }

        public async Task DeleteNewsletterSubscription(int id)
        {
            NewsletterSubscription subscription = await _newsletterSubscriptionRepository.GetSingleById(id);
            if (subscription == null)
                throw new CustomException("Newsletter Subscription not found", 404);

            subscription.IsDeleted = true;
            await _newsletterSubscriptionRepository.Update(subscription);
        }
    }
}
