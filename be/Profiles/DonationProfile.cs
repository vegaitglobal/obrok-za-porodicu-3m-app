using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.DTOs;
using MealForFamily.Models;

namespace MealForFamily.Profiles
{
    public class DonationProfile : Profile
    {
        public DonationProfile()
        {
            CreateMap<RequestDonationDTO, Donation>().AfterMap<DonationDTOAction>();
            CreateMap<Donation, DonationDTO>().AfterMap((src, dest, context) =>
            {
                if (src.VolunteerActionType != null)
                    dest.VolunteerActionType = context.Mapper.Map<VolunteerActionTypeDTO>(src.VolunteerActionType);

                if (src.VolunteerAction != null)
                    dest.VolunteerAction = context.Mapper.Map<VolunteerActionDTO>(src.VolunteerAction);
            });
        }
    }
}
