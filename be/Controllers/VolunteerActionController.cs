using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Controllers
{
    [Route("api/volunteer-actions")]
    [ApiController]
    public class VolunteerActionController : BaseController
    {
        private readonly IVolunteerActionService _volunteerActionService;

        public VolunteerActionController(IVolunteerActionService volunteerActionService)
        {
            _volunteerActionService = volunteerActionService;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetVolunteerActions()
        {
            return Ok(await _volunteerActionService.GetVolunteerActions());
        }

        [HttpGet("campaign/{id:int}")]
        public async Task<IActionResult> GetSingleVolunteerAction([FromRoute] int id)
        {
            return Ok(await _volunteerActionService.GetSingleById(id));
        }
    }
}