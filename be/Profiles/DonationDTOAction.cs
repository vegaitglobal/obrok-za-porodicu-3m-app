using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.Models;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Profiles
{
    public class DonationDTOAction : IMappingAction<RequestDonationDTO, Donation>
    {
        private readonly IVolunteerActionTypeService _volunteerActionTypeService;
        private readonly IVolunteerActionService _volunteerActionService;

        public DonationDTOAction(IVolunteerActionTypeService volunteerActionTypeService, IVolunteerActionService volunteerActionService)
        {
            _volunteerActionTypeService = volunteerActionTypeService;
            _volunteerActionService = volunteerActionService;
        }

        public async void Process(RequestDonationDTO source, Donation destination, ResolutionContext context)
        {
            if (source.VolunteerActionTypeId != null)
            {
                destination.VolunteerActionType = await _volunteerActionTypeService.GetSingleById((int)source.VolunteerActionTypeId);
            }
            destination.IsCompany = source.IsCompany;
            destination.CompanyName = source.CompanyName;
            destination.FullName = source.FullName;
            destination.Email = source.Email;
            destination.PhoneNumber = source.PhoneNumber;
            destination.Description = source.Description;
            destination.IsPickup = source.IsPickup;
            destination.Address = source.Address;
            if (source.VolunteerActionId != null)
            {
                destination.VolunteerAction = await _volunteerActionService.GetSingleById((int)source.VolunteerActionId);
            }
        }
    }
}
