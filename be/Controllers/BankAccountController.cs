using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Controllers
{
    [Route("api/bank-account")]
    [ApiController]
    public class BankAccountController : BaseController
    {
        private readonly IBankAccountService _bankAccountService;

        public BankAccountController(IBankAccountService bankAccountService)
        {
            _bankAccountService = bankAccountService;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetBankAccount()
        {
            return Ok(await _bankAccountService.GetBankAccount());
        }
    }
}