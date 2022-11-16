using System;
using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
	public interface IThankYouEmailSendingService
	{
        Task ThankSubscribers(VolunteerAction volunteerAction);

        Task ThankSubscribers(News news);

        Task ThankDonator(Donation donation);
    }
}

