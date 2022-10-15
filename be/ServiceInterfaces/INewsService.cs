using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface INewsService
    {
        Task<List<News>> GetNews();
    }
}