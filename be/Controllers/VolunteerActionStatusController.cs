using AutoMapper;
using MealForFamily.Authorization;
using MealForFamily.Dtos;
using MealForFamily.DTOs;
using MealForFamily.Models;
using MealForFamily.ServiceInterface;
using Microsoft.AspNetCore.Mvc;

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
            List<VolunteerActionStatusDTO> dtos = new();
            List<VolunteerActionStatus> statuses = await _volunteerActionStatusService.GetVolunteerActionStatuses();
            foreach (VolunteerActionStatus status in statuses)
                dtos.Add(_mapper.Map<VolunteerActionStatusDTO>(status));

            return Ok(dtos);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleVolunteerActionStatus([FromRoute] int id)
        {
            return Ok(_mapper.Map<VolunteerActionStatusDTO>(await _volunteerActionStatusService.GetSingleById(id)));
        }

        [Authorize]
        [HttpPost("")]
        public async Task<IActionResult> CreateVolunteerActionStatus(RequestVolunteerActionStatusDTO request)
        {
            VolunteerActionStatus model = _mapper.Map<VolunteerActionStatus>(request);
            return Ok(_mapper.Map<VolunteerActionStatusDTO>(await _volunteerActionStatusService.CreateVolunteerActionStatus(model)));
        }

        [Authorize]
        [HttpPut("")]
        public async Task<IActionResult> UpdateVolunteerActionStatus(RequestVolunteerActionStatusDTO request)
        {
            VolunteerActionStatus model = _mapper.Map<VolunteerActionStatus>(request);
            return Ok(_mapper.Map<VolunteerActionStatusDTO>(await _volunteerActionStatusService.UpdateVolunteerActionStatus(model)));
        }
    }
}
