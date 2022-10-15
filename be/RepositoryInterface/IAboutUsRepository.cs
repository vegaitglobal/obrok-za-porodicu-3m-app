using MealForFamily.Models;

namespace MealForFamily.RepositoryInterface
{
    public interface IAboutUsRepository : IRepository<AboutUs>
    {
        Task<AboutUs> GetAboutUs();
    }
}
