using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Controllers
{
    [Route("api/contacts")]
    [ApiController]
    public class ContactController : BaseController
    {
        private readonly IContactService _contactService;

        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }
        
        [HttpGet("")]
        public async Task<IActionResult> GetContacts()
        {
            return Ok(await _contactService.GetContacts());
        }
    }
}