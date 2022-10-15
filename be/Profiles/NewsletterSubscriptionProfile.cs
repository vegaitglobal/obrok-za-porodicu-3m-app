using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.DTOs;
using MealForFamily.Models;

namespace MealForFamily.Profiles
{
    public class NewsletterSubscriptionProfile : Profile
    {
        public NewsletterSubscriptionProfile()
        {
            CreateMap<RequestNewsletterSubscriptionDTO, NewsletterSubscription>();
            CreateMap<NewsletterSubscription, NewsletterSubscriptionDTO>();
        }
    }
}
