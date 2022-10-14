using WebApplication1.ServiceInterface;
using WebApplication1.Models;
using WebApplication1.RepositoryInterface;

namespace WebApplication1.Service
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository){
            _contactRepository = contactRepository;
        }
        public async Task<List<Contact>> GetAllContacts(){
            return (List<Contact>)await _contactRepository.GetAll();
        }
    }
}