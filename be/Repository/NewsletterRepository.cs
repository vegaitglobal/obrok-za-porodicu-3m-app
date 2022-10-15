using Microsoft.EntityFrameworkCore;
using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;

namespace MealForFamily.Repositories
{
    public class NewsletterSubscriptionRepository : Repository<NewsletterSubscription>, INewsletterSubscriptionRepository
    {
        public NewsletterSubscriptionRepository(DataContext context) : base(context) { }

        public async Task<List<NewsletterSubscription>> GetNewsletterSubscriptions()
        {
            return await _context.NewsletterSubscriptions
                .ToListAsync();
        }
        
        public async Task<NewsletterSubscription> GetSingleById(int id)
        {
            return await _context.NewsletterSubscriptions.Where(x => x.Id == id).FirstOrDefaultAsync();
        }
    }
}