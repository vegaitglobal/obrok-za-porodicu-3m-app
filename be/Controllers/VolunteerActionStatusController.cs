using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Controllers
{
    [Route("api/volunteer-action-statuses")]
    [ApiController]
    public class VolunteerActionStatusController : BaseController
    {
        private readonly IVolunteerActionStatusService _volunteerActionStatusService;

        public VolunteerActionStatusController(IVolunteerActionStatusService volunteerActionStatusService)
        {
            _volunteerActionStatusService = volunteerActionStatusService;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetVolunteerActionStatuses()
        {
            return Ok(await _volunteerActionStatusService.GetVolunteerActionStatuses());
        }

        [HttpGet("campaign/{id:int}")]
        public async Task<IActionResult> GetSingleVolunteerActionStatus([FromRoute] int id)
        {
            return Ok(await _volunteerActionStatusService.GetSingleById(id));
        }
    }
}