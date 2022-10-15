using MealForFamily.Models;

namespace MealForFamily.RepositoryInterface
{
    public interface IContactRepository : IRepository<Contact>
    {
        Task<List<Contact>> GetContacts();

        Task<Contact> GetSingleById(int id);
    }
}
