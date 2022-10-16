using MealForFamily.Models;

namespace MealForFamily.RepositoryInterface
{
    public interface INewsletterSubscriptionRepository : IRepository<NewsletterSubscription>
    {
        Task<List<NewsletterSubscription>> GetNewsletterSubscriptions();

        Task<NewsletterSubscription> GetSingleById(int id);

        Task<NewsletterSubscription?> GetByEmail(string email);
    }
}
