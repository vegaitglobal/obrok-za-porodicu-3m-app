using Microsoft.EntityFrameworkCore;
using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;

namespace MealForFamily.Repositories
{
    public class ContactRepository : Repository<Contact>, IContactRepository
    {
        public ContactRepository(DataContext context) : base(context) { }

        public async Task<List<Contact>> GetContacts()
        {
            return await _context.Contacts
                .ToListAsync();
        }
    }
}