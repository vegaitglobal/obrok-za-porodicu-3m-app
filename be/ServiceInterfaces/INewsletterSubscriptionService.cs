using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface INewsletterSubscriptionService
    {
        Task<List<NewsletterSubscription>> GetNewsletterSubscriptions();

        Task<NewsletterSubscription> GetSingleById(int id);

        Task<NewsletterSubscription> CreateNewsletterSubscription(NewsletterSubscription ns);

        Task<NewsletterSubscription> UpdateNewsletterSubscription(NewsletterSubscription ns);
        Task DeleteNewsletterSubscription(int id);
    }
}
