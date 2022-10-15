using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface IContactService
    {
        Task<List<Contact>> GetContacts();
        
        Task<Contact> GetSingleById(int id);
    }
}