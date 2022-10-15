using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.Models;

namespace MealForFamily.Profiles
{
    public class NewsProfile : Profile
    {
        public NewsProfile()
        {
            CreateMap<RequestNewsDTO, News>();
        }
    }
}
