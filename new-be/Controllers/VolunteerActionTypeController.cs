using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;
using MealForFamily.Dtos;
using MealForFamily.Models;

namespace MealForFamily.Controllers
{
    [Route("api/volunteer-action-types")]
    [ApiController]
    public class VolunteerActionTypeController : BaseController
    {
        private readonly IVolunteerActionTypeService _volunteerActionTypeService;
        private readonly IMapper _mapper;

        public VolunteerActionTypeController(IVolunteerActionTypeService volunteerActionTypeService, IMapper mapper)
        {
            _volunteerActionTypeService = volunteerActionTypeService;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetVolunteerActionTypes()
        {
            return Ok(await _volunteerActionTypeService.GetVolunteerActionTypes());
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleVolunteerActionType([FromRoute] int id)
        {
            return Ok(await _volunteerActionTypeService.GetSingleById(id));
        }

        [HttpPost("")]
        public async Task<IActionResult> CreateVolunteerActionType(RequestVolunteerActionTypeDTO request)
        {
            // TODO: Fix AutoMapper
            // VolunteerActionType model = _mapper.Map<RequestVolunteerActionTypeDTO>(request);

            VolunteerActionType model = new();
            model.Name = request.Name;
            model.HasPickup = request.HasPickup;
            model.HasPayment = request.HasPayment;

            return Ok(await _volunteerActionTypeService.CreateVolunteerActionType(model));
        }

        [HttpPut("")]
        public async Task<IActionResult> UpdateVolunteerActionType(RequestVolunteerActionTypeDTO request)
        {
            // TODO: Fix AutoMapper
            // VolunteerActionType model = _mapper.Map<RequestVolunteerActionTypeDTO>(request);

            VolunteerActionType model = new();
            model.Id = request.Id;
            model.Name = request.Name;
            model.HasPickup = request.HasPickup;
            model.HasPayment = request.HasPayment;

            return Ok(await _volunteerActionTypeService.UpdateVolunteerActionType(model));
        }
    }
}
