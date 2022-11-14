using System;
using MealForFamily.Models;
using MealForFamily.Service;
using MealForFamily.ServiceInterface;
using MealForFamily.ServiceInterfaces;

namespace MealForFamily.Services
{
	public class ThankYouEmailSendingService : IThankYouEmailSendingService
    {
        private readonly IEmailSendingService _emailSendingService;
        private readonly INewsletterSubscriptionService _newsletterSubscriptionService;
        private readonly IContactService _contactService;

        public ThankYouEmailSendingService(IEmailSendingService emailSendingService, INewsletterSubscriptionService newsletterSubscriptionService, IContactService contactService)
		{
            _emailSendingService = emailSendingService;
            _newsletterSubscriptionService = newsletterSubscriptionService;
            _contactService = contactService;
        }

        public async Task ThankSubscribers()
        {
            // Notify subscribers
            List<string> subscriptionEmails = await _newsletterSubscriptionService.GetNewsletterSubscriptionEmails();
            var message = new Message(subscriptionEmails, "Test email", "News is created, sending thank you emails to all of the subscribers.");

            _emailSendingService.SendEmail(message);
        }

        public async Task ThankDonator(Donation donation)
        {
            // Notify all contacts & donation creator
            List<string> adresses = await GetAdresses(donation);
            var message = new Message(adresses, "Test email", "Donation is created, sending thank you emails to all of the contacts and donation creator.");

            _emailSendingService.SendEmail(message);
        }

        private async Task<List<string>> GetAdresses(Donation donation)
        {
            List<string> adresses = new List<string>();
            List<Contact> contacts = await _contactService.GetContacts();
            foreach (Contact contact in contacts)
            {
                if (contact.Email is not null)
                    adresses.Add(contact.Email);
            }
            adresses.Add(donation.Email);
            return adresses;
        }
    }
}

