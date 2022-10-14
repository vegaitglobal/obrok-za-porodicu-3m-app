using Microsoft.EntityFrameworkCore;
using WebApplication1.Data;
using WebApplication1.Models;
using WebApplication1.RepositoryInterface;

namespace WebApplication1.Repository
{
    public class ContactRepository : Repository<Contact>, IContactRepository
    {
        public ContactRepository(DataContext context) : base(context) { }

    }
}