using AutoMapper;
using MealForFamily.Authorization;
using MealForFamily.Dtos;
using MealForFamily.DTOs;
using MealForFamily.Models;
using MealForFamily.ServiceInterface;
using Microsoft.AspNetCore.Mvc;

namespace MealForFamily.Controllers
{
    [Route("api/donations")]
    [ApiController]
    public class DonationController : BaseController
    {
        private readonly IDonationService _donationService;
        private readonly IVolunteerActionService _volunteerActionService;
        private readonly IVolunteerActionTypeService _volunteerActionTypeService;
        private readonly IMapper _mapper;

        public DonationController(
            IDonationService donationService,
            IVolunteerActionService volunteerActionService,
            IVolunteerActionTypeService volunteerActionTypeService,
            IMapper mapper)
        {
            _donationService = donationService;
            _volunteerActionService = volunteerActionService;
            _volunteerActionTypeService = volunteerActionTypeService;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetDonations()
        {
            List<DonationDTO> dtos = new();
            List<Donation> donations = await _donationService.GetDonations();
            foreach (Donation donation in donations)
                dtos.Add(_mapper.Map<DonationDTO>(donation));

            return Ok(dtos);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleDonation([FromRoute] int id)
        {
            return Ok(_mapper.Map<DonationDTO>(await _donationService.GetSingleById(id)));
        }

        [HttpPost("")]
        public async Task<IActionResult> CreateDonation(RequestDonationDTO request)
        {
            Donation model = _mapper.Map<Donation>(request);
            if (request.VolunteerActionId != null)
            {
                var volunteerAction = await _volunteerActionService.GetSingleById((int)request.VolunteerActionId);
                model.VolunteerAction = volunteerAction;
                model.VolunteerActionType = volunteerAction.Type;
            }
            return Ok(_mapper.Map<DonationDTO>(await _donationService.CreateDonation(model)));
        }

        [Authorize]
        [HttpPut("")]
        public async Task<IActionResult> UpdateDonation(RequestDonationDTO request)
        {
            Donation model = _mapper.Map<Donation>(request);
            if (request.VolunteerActionId != null)
            {
                var volunteerAction = await _volunteerActionService.GetSingleById((int)request.VolunteerActionId);
                model.VolunteerAction = volunteerAction;
                model.VolunteerActionType = volunteerAction.Type;
            }
            return Ok(_mapper.Map<DonationDTO>(await _donationService.UpdateDonation(model)));
        }

        [Authorize]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteDonation(int id)
        {
            await _donationService.DeleteDonation(id);
            return Ok("Donation successfully deleted");
        }
    }
}
