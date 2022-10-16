using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface INewsService
    {
        Task<Page<News>> GetNews(int pageNumber, int pageSize);

        Task<News> GetSingleById(int id);

        Task<News> CreateNews(News news);

        Task<News> UpdateNews(News news);
        Task DeleteNews(int id);
    }
}
