using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Controllers
{
    [Route("api/volunteer-action-types")]
    [ApiController]
    public class VolunteerActionTypeController : BaseController
    {
        private readonly IVolunteerActionTypeService _volunteerActionTypeService;

        public VolunteerActionTypeController(IVolunteerActionTypeService volunteerActionTypeService)
        {
            _volunteerActionTypeService = volunteerActionTypeService;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetVolunteerActionTypes()
        {
            return Ok(await _volunteerActionTypeService.GetVolunteerActionTypes());
        }
    }
}