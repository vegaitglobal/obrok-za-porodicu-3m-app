using System;
using MealForFamily.Models;
using MealForFamily.Service;
using MealForFamily.ServiceInterface;
using MealForFamily.ServiceInterfaces;
using Microsoft.AspNetCore.Http;

namespace MealForFamily.Services
{
	public class ThankYouEmailSendingService : IThankYouEmailSendingService
    {
        private static readonly string ACTION_TEMPLATE_PATH = "EmailTemplates/action.html";
        private static readonly string DONATION_TEMPLATE_PATH = "EmailTemplates/donation.html";
        private static readonly string NEWS_TEMPLATE_PATH = "EmailTemplates/news.html";

        private readonly IEmailSendingService _emailSendingService;
        private readonly INewsletterSubscriptionService _newsletterSubscriptionService;
        private readonly IContactService _contactService;
        private readonly IHttpContextAccessor _httpContextAccessor;

        public ThankYouEmailSendingService(IHttpContextAccessor httpContextAccessor, IEmailSendingService emailSendingService, INewsletterSubscriptionService newsletterSubscriptionService, IContactService contactService)
		{
            _emailSendingService = emailSendingService;
            _newsletterSubscriptionService = newsletterSubscriptionService;
            _contactService = contactService;
            _httpContextAccessor = httpContextAccessor;
        }

        public async Task ThankSubscribers(VolunteerAction volunteerAction)
        {
            // Notify subscribers
            var template = GetEmailTemplate(ACTION_TEMPLATE_PATH);
            template = template.Replace("{{ACTION_TYPE}}", volunteerAction.Type?.Name);
            template = template.Replace("{{ACTION_TITLE}}", volunteerAction.Title is null ? volunteerAction.Title : "");
            template = template.Replace("{{DESCRIPTION}}", volunteerAction.RawDescription);

            List<string> subscriptionEmails = await _newsletterSubscriptionService.GetNewsletterSubscriptionEmails();

            foreach (var email in subscriptionEmails)
            {
                var finalTemplate = template.Replace("{{UNSUBSCRIBE_EMAIL}}", GetBaseUrl() + email);
                var message = new Message(new List<string> { email }, "Nova akcija pomoći je u toku", finalTemplate);

                _emailSendingService.SendEmail(message);
            }
        }

        public async Task ThankSubscribers(News news)
        {
            // Notify subscribers
            var template = GetEmailTemplate(ACTION_TEMPLATE_PATH);
            template = template.Replace("{{ACTION_TITLE}}", news.Title);
            template = template.Replace("{{DESCRIPTION}}", news.Description);


            List<string> subscriptionEmails = await _newsletterSubscriptionService.GetNewsletterSubscriptionEmails();

            foreach(var email in subscriptionEmails)
            {
                var finalTemplate = template.Replace("{{UNSUBSCRIBE_EMAIL}}", GetBaseUrl() + email);
                var message = new Message(new List<string> { email }, "Novosti iz organizacije", finalTemplate);

                _emailSendingService.SendEmail(message);
            }
        }

        public async Task ThankDonator(Donation donation)
        {
            // Notify all contacts & donation creator
            List<string> adresses = await GetAdresses(donation);
            var template = GetEmailTemplate(DONATION_TEMPLATE_PATH);
            template = template.Replace("{{DONATION_TYPE}}", donation.VolunteerActionType?.Name);
            template = template.Replace("{{COMPANY_NAME}}", donation.CompanyName);
            template = template.Replace("{{EMAIL}}", donation.Email);
            template = template.Replace("{{PHONE_NUMBER}}", donation.PhoneNumber);
            template = template.Replace("{{DESCRIPTION}}", donation.Description);
            template = template.Replace("{{FULL_NAME}}", donation.FullName);
            template = template.Replace("{{IS_PICKUP}}", donation.IsPickup is true ? "Da" : "Ne");
            template = template.Replace("{{PICKUP_ADDRESS}}", donation.IsPickup is true ? donation.Address : "/");

            var message = new Message(adresses, "Hvala Vam na velikodušnosti", template);

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

        private string GetEmailTemplate(string templatePath)
        {
            using (StreamReader SourceReader = System.IO.File.OpenText(templatePath))
            {
                return SourceReader.ReadToEnd();
            }
        }

        private string GetBaseUrl()
        {
            var uri = _httpContextAccessor.HttpContext?.Request.Host.Value;
            return uri + "/api/newsletter-subscriptions/unsubscribe/";
        }
    }
}
