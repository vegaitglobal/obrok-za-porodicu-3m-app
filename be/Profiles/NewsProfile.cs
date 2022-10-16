using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.DTOs;
using MealForFamily.Models;

namespace MealForFamily.Profiles
{
    public class NewsProfile : Profile
    {
        public NewsProfile()
        {
            CreateMap<RequestNewsDTO, News>();
            CreateMap<News, NewsDTO>();
        }
    }
}
