using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface IAboutUsService
    {
        Task<AboutUs> GetAboutUs();

        Task<AboutUs> UpdateAboutUs(AboutUs au);
    }
}
