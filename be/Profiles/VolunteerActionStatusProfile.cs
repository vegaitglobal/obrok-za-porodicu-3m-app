using AutoMapper;
using MealForFamily.DTOs;
using MealForFamily.Models;

namespace MealForFamily.Profiles
{
    public class VolunteerActionStatusProfile : Profile
    {
        public VolunteerActionStatusProfile()
        {
            CreateMap<VolunteerActionStatus, VolunteerActionStatusDTO>();
        }
    }
}
