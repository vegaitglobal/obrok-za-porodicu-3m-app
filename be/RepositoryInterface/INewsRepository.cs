using MealForFamily.Models;

namespace MealForFamily.RepositoryInterface
{
    public interface INewsRepository : IRepository<News>
    {
        Task<News> GetSingleById(int id);
        new Task<Page<News>> GetAllByPage(int pageNumber, int pageSize);
    }
}

