using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface IEmailSendingService
    {
        void SendEmail(Message message);
    }
}