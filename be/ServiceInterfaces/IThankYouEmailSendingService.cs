using System;
using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
	public interface IThankYouEmailSendingService
	{
        Task ThankSubscribers();

        Task ThankDonator(Donation donation);
    }
}

