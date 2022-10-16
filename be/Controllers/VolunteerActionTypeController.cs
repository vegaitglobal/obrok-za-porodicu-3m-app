using AutoMapper;
using MealForFamily.Authorization;
using MealForFamily.Dtos;
using MealForFamily.DTOs;
using MealForFamily.Models;
using MealForFamily.ServiceInterface;
using Microsoft.AspNetCore.Mvc;

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
            List<VolunteerActionTypeDTO> dtos = new();
            List<VolunteerActionType> types = await _volunteerActionTypeService.GetVolunteerActionTypes();
            foreach (VolunteerActionType type in types)
                dtos.Add(_mapper.Map<VolunteerActionTypeDTO>(type));

            return Ok(dtos);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleVolunteerActionType([FromRoute] int id)
        {
            return Ok(_mapper.Map<VolunteerActionTypeDTO>(await _volunteerActionTypeService.GetSingleById(id)));
        }

        [Authorize]
        [HttpPost("")]
        public async Task<IActionResult> CreateVolunteerActionType(RequestVolunteerActionTypeDTO request)
        {
            VolunteerActionType model = _mapper.Map<VolunteerActionType>(request);
            return Ok(_mapper.Map<VolunteerActionTypeDTO>(await _volunteerActionTypeService.CreateVolunteerActionType(model)));
        }

        [Authorize]
        [HttpPut("")]
        public async Task<IActionResult> UpdateVolunteerActionType(RequestVolunteerActionTypeDTO request)
        {
            VolunteerActionType model = _mapper.Map<VolunteerActionType>(request);
            return Ok(_mapper.Map<VolunteerActionTypeDTO>(await _volunteerActionTypeService.UpdateVolunteerActionType(model)));
        }

        [Authorize]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteVolunteerActionType(int id)
        {
            await _volunteerActionTypeService.DeleteVolunteerActionType(id);
            return Ok("Volunteer Action Type deleted successfully");
        }
    }
}
