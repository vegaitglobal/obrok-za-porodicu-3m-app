using MealForFamily.Models;

namespace MealForFamily.RepositoryInterface
{
    public interface INewsletterSubscriptionRepository : IRepository<NewsletterSubscription>
    {
        Task<List<NewsletterSubscription>> GetNewsletterSubscriptions();
    }
}