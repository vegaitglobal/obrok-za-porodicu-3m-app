using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface IBankAccountService
    {
        Task<BankAccount> GetBankAccount();
    }
}