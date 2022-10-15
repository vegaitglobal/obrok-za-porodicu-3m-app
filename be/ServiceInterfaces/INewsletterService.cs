using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface INewsletterSubscriptionService
    {
        Task<List<NewsletterSubscription>> GetNewsletterSubscriptions();
        
        Task<NewsletterSubscription> GetSingleById(int id);
    }
}