using AutoMapper;
using MealForFamily.Authorization;
using MealForFamily.Dtos;
using MealForFamily.DTOs;
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
            List<ContactDTO> dtos = new();
            List<Contact> contacts = await _contactService.GetContacts();
            foreach (Contact contact in contacts)
                dtos.Add(_mapper.Map<ContactDTO>(contact));

            return Ok(dtos);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleContact([FromRoute] int id)
        {
            return Ok(_mapper.Map<ContactDTO>(await _contactService.GetSingleById(id)));
        }

        [Authorize]
        [HttpPost("")]
        public async Task<IActionResult> CreateContact(RequestContactDTO request)
        {
            Contact model = _mapper.Map<Contact>(request);
            return Ok(_mapper.Map<ContactDTO>(await _contactService.CreateContact(model)));
        }

        [Authorize]
        [HttpPut("")]
        public async Task<IActionResult> UpdateContact(RequestContactDTO request)
        {
            Contact model = _mapper.Map<Contact>(request);
            return Ok(_mapper.Map<ContactDTO>(await _contactService.UpdateContact(model)));
        }

        [Authorize]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteContact(int id)
        {
            await _contactService.DeleteContact(id);
            return Ok("Contact deleted successfully");
        }
    }
}
