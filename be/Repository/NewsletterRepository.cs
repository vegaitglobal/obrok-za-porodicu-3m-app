using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using Microsoft.EntityFrameworkCore;

namespace MealForFamily.Repositories
{
    public class NewsletterSubscriptionRepository : Repository<NewsletterSubscription>, INewsletterSubscriptionRepository
    {
        public NewsletterSubscriptionRepository(DataContext context) : base(context) { }

        public async Task<List<NewsletterSubscription>> GetNewsletterSubscriptions()
        {
            return await _context.NewsletterSubscriptions.Where(n => n.IsDeleted == false).OrderByDescending(n => n.Id)
                .ToListAsync();
        }

        public async Task<List<string>> GetNewsletterSubscriptionEmails()
        {
            return await _context.NewsletterSubscriptions.Where(n => n.IsDeleted == false).Select(item => item.Email)
                .ToListAsync();
        }

        public async Task<NewsletterSubscription> GetSingleById(int id)
        {
            return await _context.NewsletterSubscriptions.Where(x => x.Id == id && x.IsDeleted == false).FirstOrDefaultAsync();
        }

        public async Task<NewsletterSubscription?> GetByEmail(string email)
        {
            return await _context.NewsletterSubscriptions.Where(n => n.Email.ToLower() == email.ToLower()).FirstOrDefaultAsync();
        }
    }
}
