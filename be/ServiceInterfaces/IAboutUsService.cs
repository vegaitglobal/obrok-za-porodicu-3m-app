using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface IAboutUsService
    {        Task<AboutUs> GetAboutUs();
    }
}