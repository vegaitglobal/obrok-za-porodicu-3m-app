using Microsoft.AspNetCore.Mvc;
using WebApplication1.ServiceInterface;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactController(IContactService contactService) {
            _contactService = contactService;
        }

        [HttpGet("contacts")]
        public async Task<IActionResult> GetContacts()
        {
            List<Contact> contacts = await _contactService.GetAllContacts();

            return Ok(contacts);
        }
    }
}
