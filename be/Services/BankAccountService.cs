using AutoMapper;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Service
{
    public class BankAccountService : IBankAccountService
    {
        private readonly IBankAccountRepository _bankAccountRepository;

        public BankAccountService(IBankAccountRepository bankAccountRepository)
        {
            _bankAccountRepository = bankAccountRepository;
        }

        public async Task<BankAccount> GetBankAccount()
        {
            return await _bankAccountRepository.GetBankAccount();
        }

        public async Task<BankAccount> UpdateBankAccount(BankAccount ba) {
            return await _bankAccountRepository.Update(ba);
        }
    }
}
