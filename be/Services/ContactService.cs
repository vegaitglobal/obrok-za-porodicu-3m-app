using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Service
{
    public class ContactService : IContactService
    {
        private readonly IContactRepository _contactRepository;

        public ContactService(IContactRepository contactRepository)
        {
            _contactRepository = contactRepository;
        }

        public async Task<List<Contact>> GetContacts()
        {
            return await _contactRepository.GetContacts();
        }

        public async Task<Contact> GetSingleById(int id)
        {
            return await _contactRepository.GetById(id);
        }

        public async Task<Contact> CreateContact(Contact contact)
        {
            return await _contactRepository.Create(contact);
        }

        public async Task<Contact> UpdateContact(Contact contact)
        {
            return await _contactRepository.Update(contact);
        }
    }
}
