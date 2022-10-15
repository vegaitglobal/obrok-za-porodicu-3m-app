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

        public async Task<Contact> GetSingleById(int id)
        {
            return await _context.Contacts.Where(x => x.Id == id).FirstOrDefaultAsync();
        }
    }
}