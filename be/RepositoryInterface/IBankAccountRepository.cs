using MealForFamily.Models;

namespace MealForFamily.RepositoryInterface
{
    public interface IBankAccountRepository : IRepository<BankAccount>
    {
        Task<BankAccount> GetBankAccount();
    }
}
