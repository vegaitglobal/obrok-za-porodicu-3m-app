using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.Models;

namespace MealForFamily.Profiles
{
    public class ContactProfile : Profile
    {
        public ContactProfile()
        {
            CreateMap<RequestContactDTO, Contact>();
        }
    }
}
