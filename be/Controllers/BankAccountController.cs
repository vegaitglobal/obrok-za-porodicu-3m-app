using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;
using MealForFamily.Dtos;
using MealForFamily.Models;

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

        [HttpPost("/update")]
        public async Task<IActionResult> UpdateBankAccount(RequestBankAccountDTO request)
        {
            // TODO: Fix AutoMapper
            // BankAccount model = _mapper.Map<RequestBankAccountDTO>(request);

            BankAccount model = new();
            model.Id = request.Id;
            model.ReceiverName = request.ReceiverName;
            model.ReceiverCity = request.ReceiverCity;
            model.ReceiverAddress = request.ReceiverAddress;
            model.AccountNumber = request.AccountNumber;
            model.TransactionModel = request.TransactionModel;
            model.ReferenceNumber = request.ReferenceNumber;
            model.PhoneNumber = request.PhoneNumber;

            return Ok(await _bankAccountService.UpdateBankAccount(model));
        }
    }
}
