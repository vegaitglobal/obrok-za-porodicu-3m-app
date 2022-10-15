using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;
using MealForFamily.Dtos;
using MealForFamily.Models;

namespace MealForFamily.Controllers
{
    [Route("api/volunteer-action-statuses")]
    [ApiController]
    public class VolunteerActionStatusController : BaseController
    {
        private readonly IVolunteerActionStatusService _volunteerActionStatusService;
        private readonly IMapper _mapper;

        public VolunteerActionStatusController(IVolunteerActionStatusService volunteerActionStatusService, IMapper mapper)
        {
            _volunteerActionStatusService = volunteerActionStatusService;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetVolunteerActionStatuses()
        {
            return Ok(await _volunteerActionStatusService.GetVolunteerActionStatuses());
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleVolunteerActionStatus([FromRoute] int id)
        {
            return Ok(await _volunteerActionStatusService.GetSingleById(id));
        }

        [HttpPost("")]
        public async Task<IActionResult> CreateVolunteerActionStatus(RequestVolunteerActionStatusDTO request)
        {
            // TODO: Fix AutoMapper
            // VolunteerActionStatus model = _mapper.Map<RequestVolunteerActionStatusDTO>(request);

            VolunteerActionStatus model = new();
            model.Name = request.Name;

            return Ok(await _volunteerActionStatusService.CreateVolunteerActionStatus(model));
        }

        [HttpPut("")]
        public async Task<IActionResult> UpdateVolunteerActionStatus(RequestVolunteerActionStatusDTO request)
        {
            // TODO: Fix AutoMapper
            // VolunteerActionStatus model = _mapper.Map<RequestVolunteerActionStatusDTO>(request);

            VolunteerActionStatus model = new();
            model.Id = request.Id;
            model.Name = request.Name;

            return Ok(await _volunteerActionStatusService.UpdateVolunteerActionStatus(model));
        }
    }
}
