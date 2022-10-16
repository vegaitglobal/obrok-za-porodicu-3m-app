using MealForFamily.Helpers.Exceptions;
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
            Contact contact = await _contactRepository.GetSingleById(id);
            if (contact == null)
                throw new CustomException("Contact not found", 404);

            return contact;
        }

        public async Task<Contact> CreateContact(Contact contact)
        {
            return await _contactRepository.Create(contact);
        }

        public async Task<Contact> UpdateContact(Contact contact)
        {
            return await _contactRepository.Update(contact);
        }

        public async Task DeleteContact(int id)
        {
            Contact contact = await _contactRepository.GetSingleById(id);
            if (contact == null)
                throw new CustomException("Contact not found", 404);

            contact.IsDeleted = true;
            await _contactRepository.Update(contact);
        }
    }
}
