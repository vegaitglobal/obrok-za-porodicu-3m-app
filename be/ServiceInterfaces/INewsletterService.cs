using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface INewsletterSubscriptionService
    {
        Task<List<NewsletterSubscription>> GetNewsletterSubscriptions();
    }
}