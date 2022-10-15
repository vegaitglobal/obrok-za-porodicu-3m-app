using AutoMapper;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Service
{
    public class AboutUsService : IAboutUsService
    {
        private readonly IAboutUsRepository _aboutUsRepository;

        public AboutUsService(IAboutUsRepository aboutUsRepository)
        {
            _aboutUsRepository = aboutUsRepository;
        }

        public async Task<AboutUs> GetAboutUs()
        {
            return await _aboutUsRepository.GetAboutUs();
        }

        public async Task<AboutUs> UpdateAboutUs(AboutUs au) {
            return await _aboutUsRepository.Update(au);
        }
    }
}
