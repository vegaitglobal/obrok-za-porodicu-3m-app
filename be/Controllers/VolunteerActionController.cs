using AutoMapper;
using MealForFamily.Authorization;
using MealForFamily.Dtos;
using MealForFamily.DTOs;
using MealForFamily.Models;
using MealForFamily.ServiceInterface;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace MealForFamily.Controllers
{
    [Route("api/volunteer-actions")]
    [ApiController]
    public class VolunteerActionController : BaseController
    {
        private readonly IVolunteerActionService _volunteerActionService;
        private readonly IVolunteerActionStatusService _volunteerActionStatusService;
        private readonly IVolunteerActionTypeService _volunteerActionTypeService;
        private readonly IMapper _mapper;

        public VolunteerActionController(
            IVolunteerActionService volunteerActionService,
            IVolunteerActionStatusService volunteerActionStatusService,
            IVolunteerActionTypeService volunteerActionTypeService,
            IMapper mapper)
        {
            _volunteerActionService = volunteerActionService;
            _volunteerActionStatusService = volunteerActionStatusService;
            _volunteerActionTypeService = volunteerActionTypeService;
            _mapper = mapper;
        }

        [HttpPost("search")]
        public async Task<IActionResult> GetVolunteerActions(VolunteerActionFilterDTO actionFilters, [RequiredAttribute] int pageNumber, [RequiredAttribute] int pageSize)
        {
            List<VolunteerActionDTO> dtos = new();
            Page<VolunteerAction> actions = await _volunteerActionService.GetVolunteerActions(actionFilters, pageNumber, pageSize);
            foreach (VolunteerAction action in actions.Content)
                dtos.Add(_mapper.Map<VolunteerActionDTO>(action));

            return Ok(new Page<VolunteerActionDTO>(pageNumber, pageSize, actions.Pagination.TotalPages, actions.Pagination.TotalResults, dtos));
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleVolunteerAction([FromRoute] int id)
        {
            return Ok(_mapper.Map<VolunteerActionDTO>(await _volunteerActionService.GetSingleById(id)));
        }

        [Authorize]
        [HttpPost("")]
        public async Task<IActionResult> CreateVolunteerAction(RequestVolunteerActionDTO request)
        {
            VolunteerAction model = _mapper.Map<VolunteerAction>(request);
            model.Type = await _volunteerActionTypeService.GetSingleById(request.TypeId);
            model.Status = await _volunteerActionStatusService.GetSingleById(request.StatusId);
            return Ok(_mapper.Map<VolunteerActionDTO>(await _volunteerActionService.CreateVolunteerAction(model)));
        }

        [Authorize]
        [HttpPut("")]
        public async Task<IActionResult> UpdateVolunteerAction(RequestVolunteerActionDTO request)
        {
            VolunteerAction model = _mapper.Map<VolunteerAction>(request);
            model.Type = await _volunteerActionTypeService.GetSingleById(request.TypeId);
            model.Status = await _volunteerActionStatusService.GetSingleById(request.StatusId);
            return Ok(_mapper.Map<VolunteerActionDTO>(await _volunteerActionService.UpdateVolunteerAction(model)));
        }

        [Authorize]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteVolunteerAction(int id)
        {
            await _volunteerActionService.DeleteVolunteerAction(id);
            return Ok("Volunteer Action deleted successfully");
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAllVolunteerActions()
        {
            List<VolunteerActionDTO> dtos = new();
            List<VolunteerAction> actions = await _volunteerActionService.GetAllVolunteerActions();
            foreach (VolunteerAction action in actions)
                dtos.Add(_mapper.Map<VolunteerActionDTO>(action));

            return Ok(dtos);
        }
    }
}
