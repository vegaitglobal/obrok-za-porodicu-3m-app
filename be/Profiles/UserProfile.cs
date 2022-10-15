using AutoMapper;
using MealForFamily.DTOs;
using MealForFamily.Models;

namespace MealForFamily.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<User, AuthenticateResponse>();
        }
    }
}
