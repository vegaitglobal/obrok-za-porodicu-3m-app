using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.Models;

namespace MealForFamily.Profiles
{
    public class NewsletterSubscriptionProfile : Profile
    {
        public NewsletterSubscriptionProfile()
        {
            CreateMap<RequestNewsletterSubscriptionDTO, NewsletterSubscription>();
        }
    }
}
