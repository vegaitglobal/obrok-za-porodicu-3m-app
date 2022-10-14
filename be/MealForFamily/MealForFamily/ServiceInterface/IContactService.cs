using WebApplication1.Models;

namespace WebApplication1.ServiceInterface
{
    public interface IContactService
    {
        Task<List<Contact>> GetAllContacts();
    }
}