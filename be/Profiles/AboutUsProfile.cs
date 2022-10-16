using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.Models;

namespace MealForFamily.Profiles
{
    public class AboutUsProfile : Profile
    {
        public AboutUsProfile()
        {
            CreateMap<RequestAboutUsDTO, AboutUs>();
        }
    }
}
