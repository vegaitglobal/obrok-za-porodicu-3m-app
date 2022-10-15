using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.Models;

namespace MealForFamily.Profiles
{
    public class VolunteerActionProfile : Profile
    {
        public VolunteerActionProfile()
        {
            CreateMap<RequestVolunteerActionDTO, VolunteerAction>();
        }
    }
}
