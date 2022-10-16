using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface IContactService
    {
        Task<List<Contact>> GetContacts();

        Task<Contact> GetSingleById(int id);

        Task<Contact> CreateContact(Contact contact);

        Task<Contact> UpdateContact(Contact contact);
        Task DeleteContact(int id);
    }
}
