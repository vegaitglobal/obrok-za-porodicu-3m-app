using MealForFamily.Helpers.Exceptions;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Service
{
    public class NewsService : INewsService
    {
        private readonly INewsRepository _newsRepository;

        public NewsService(INewsRepository newsRepository)
        {
            _newsRepository = newsRepository;
        }

        public async Task<List<News>> GetNews()
        {
            return await _newsRepository.GetNews();
        }

        public async Task<News> GetSingleById(int id)
        {
            News news = await _newsRepository.GetById(id);
            if (news == null)
                throw new CustomException("News not found", 404);

            return news;
        }

        public async Task<News> CreateNews(News news)
        {
            return await _newsRepository.Create(news);
        }

        public async Task<News> UpdateNews(News news)
        {
            return await _newsRepository.Update(news);
        }
    }
}
