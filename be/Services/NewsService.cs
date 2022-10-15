using AutoMapper;
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
            return await _newsRepository.GetById(id);
        }
    }
}