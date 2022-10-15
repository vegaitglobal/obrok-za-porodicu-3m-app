using Microsoft.EntityFrameworkCore;
using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;

namespace MealForFamily.Repositories
{
    public class BankAccountRepository : Repository<BankAccount>, IBankAccountRepository
    {
        public BankAccountRepository(DataContext context) : base(context) { }

        public async Task<BankAccount> GetBankAccount()
        {
            return await _context.BankAccount.FirstOrDefaultAsync();
        }
    }
}
