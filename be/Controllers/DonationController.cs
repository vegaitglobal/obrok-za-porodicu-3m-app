using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;
using MealForFamily.Dtos;
using MealForFamily.Models;

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
            return Ok(await _donationService.GetDonations());
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleDonation([FromRoute] int id)
        {
            return Ok(await _donationService.GetSingleById(id));
        }

        [HttpPost("")]
        public async Task<IActionResult> CreateDonation(RequestDonationDTO request)
        {
            // TODO: Fix AutoMapper
            // Contact model = _mapper.Map<RequestDonationDTO>(request);

            Donation model = new();
            if(request.VolunteerActionTypeId != null) {
                model.VolunteerActionType = await _volunteerActionTypeService.GetSingleById((int) request.VolunteerActionTypeId);
            }
            model.IsCompany = request.IsCompany;
            model.CompanyName = request.CompanyName;
            model.FullName = request.FullName;
            model.Email = request.Email;
            model.PhoneNumber = request.PhoneNumber;
            model.Description = request.Description;
            model.IsPickup = request.IsPickup;
            model.Address = request.Address;
            if(request.VolunteerActionId != null) {
                model.VolunteerAction = await _volunteerActionService.GetSingleById((int) request.VolunteerActionId);
            }

            return Ok(await _donationService.CreateDonation(model));
        }

        [HttpPut("")]
        public async Task<IActionResult> UpdateDonation(RequestDonationDTO request)
        {
            // TODO: Fix AutoMapper
            // Contact model = _mapper.Map<RequestDonationDTO>(request);

            Donation model = new();

            model.Id = request.Id;
            if(request.VolunteerActionTypeId != null) {
                model.VolunteerActionType = await _volunteerActionTypeService.GetSingleById((int) request.VolunteerActionTypeId);
            }
            model.IsCompany = request.IsCompany;
            model.CompanyName = request.CompanyName;
            model.FullName = request.FullName;
            model.Email = request.Email;
            model.PhoneNumber = request.PhoneNumber;
            model.Description = request.Description;
            model.IsPickup = request.IsPickup;
            model.Address = request.Address;
            if(request.VolunteerActionId != null) {
                model.VolunteerAction = await _volunteerActionService.GetSingleById((int) request.VolunteerActionId);
            }

            return Ok(await _donationService.UpdateDonation(model));
        }
    }
}
