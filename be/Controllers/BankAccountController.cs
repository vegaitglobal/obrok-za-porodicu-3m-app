using AutoMapper;
using MealForFamily.Authorization;
using MealForFamily.Dtos;
using MealForFamily.Models;
using MealForFamily.ServiceInterface;
using Microsoft.AspNetCore.Mvc;

namespace MealForFamily.Controllers
{
    [Route("api/bank-account")]
    [ApiController]
    public class BankAccountController : BaseController
    {
        private readonly IBankAccountService _bankAccountService;
        private readonly IMapper _mapper;

        public BankAccountController(IBankAccountService bankAccountService, IMapper mapper)
        {
            _bankAccountService = bankAccountService;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetBankAccount()
        {
            return Ok(await _bankAccountService.GetBankAccount());
        }

        [Authorize]
        [HttpPut("")]
        public async Task<IActionResult> UpdateBankAccount(RequestBankAccountDTO request)
        {
            BankAccount model = _mapper.Map<BankAccount>(request);
            return Ok(await _bankAccountService.UpdateBankAccount(model));
        }
    }
}
