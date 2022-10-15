using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface INewsService
    {
        Task<List<News>> GetNews();

        Task<News> GetSingleById(int id);

        Task<News> CreateNews(News news);

        Task<News> UpdateNews(News news);
    }
}
