using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;
using MealForFamily.Dtos;
using MealForFamily.Models;

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

        [HttpGet("")]
        public async Task<IActionResult> GetVolunteerActions()
        {
            return Ok(await _volunteerActionService.GetVolunteerActions());
        }

        [HttpGet("/{id:int}")]
        public async Task<IActionResult> GetSingleVolunteerAction([FromRoute] int id)
        {
            return Ok(await _volunteerActionService.GetSingleById(id));
        }

        [HttpPost("/create")]
        public async Task<IActionResult> CreateVolunteerAction(RequestVolunteerActionDTO request)
        {
            // TODO: Fix AutoMapper
            // VolunteerAction model = _mapper.Map<RequestVolunteerActionDTO>(request);

            VolunteerAction model = new();

            return Ok(await _volunteerActionService.CreateVolunteerAction(model));
        }

        [HttpPost("/update")]
        public async Task<IActionResult> UpdateVolunteerAction(RequestVolunteerActionDTO request)
        {
            // TODO: Fix AutoMapper
            // VolunteerAction model = _mapper.Map<RequestVolunteerActionDTO>(request);

            VolunteerAction model = new();
            model.Id = request.Id;
            model.Type = await _volunteerActionTypeService.GetSingleById(request.TypeId);
            model.ImageURL = request.ImageURL;
            model.Title = request.Title;
            model.Status = await _volunteerActionStatusService.GetSingleById(request.StatusId);
            model.ShortDescription = request.ShortDescription;
            model.RawDescription = request.RawDescription;
            model.Description = request.Description;
            model.ReferenceNumber = request.ReferenceNumber;

            return Ok(await _volunteerActionService.UpdateVolunteerAction(model));
        }
    }
}
