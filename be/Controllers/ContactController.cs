using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.Models;
using MealForFamily.ServiceInterface;
using Microsoft.AspNetCore.Mvc;

namespace MealForFamily.Controllers
{
    [Route("api/contacts")]
    [ApiController]
    public class ContactController : BaseController
    {
        private readonly IContactService _contactService;
        private readonly IMapper _mapper;

        public ContactController(IContactService contactService, IMapper mapper)
        {
            _contactService = contactService;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetContacts()
        {
            return Ok(await _contactService.GetContacts());
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleContact([FromRoute] int id)
        {
            return Ok(await _contactService.GetSingleById(id));
        }

        [HttpPost("")]
        public async Task<IActionResult> CreateContact(RequestContactDTO request)
        {
            Contact model = _mapper.Map<Contact>(request);
            return Ok(await _contactService.CreateContact(model));
        }

        [HttpPut("")]
        public async Task<IActionResult> UpdateContact(RequestContactDTO request)
        {
            Contact model = _mapper.Map<Contact>(request);
            return Ok(await _contactService.UpdateContact(model));
        }
    }
}
