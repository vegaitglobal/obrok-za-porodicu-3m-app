using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.DTOs;
using MealForFamily.Models;
using MealForFamily.ServiceInterface;
using Microsoft.AspNetCore.Mvc;

namespace MealForFamily.Controllers
{
    [Route("api/news")]
    [ApiController]
    public class NewsController : BaseController
    {
        private readonly INewsService _newsService;
        private readonly IMapper _mapper;

        public NewsController(INewsService newsService, IMapper mapper)
        {
            _newsService = newsService;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetNews()
        {
            List<NewsDTO> dtos = new();
            List<News> news = await _newsService.GetNews();
            foreach (News news1 in news)
                dtos.Add(_mapper.Map<NewsDTO>(news1));

            return Ok(dtos);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleNews([FromRoute] int id)
        {
            return Ok(_mapper.Map<NewsDTO>(await _newsService.GetSingleById(id)));
        }

        [HttpPost("")]
        public async Task<IActionResult> CreateNews(RequestNewsDTO request)
        {
            News model = _mapper.Map<News>(request);
            return Ok(_mapper.Map<NewsDTO>(await _newsService.CreateNews(model)));
        }

        [HttpPut("")]
        public async Task<IActionResult> UpdateNews(RequestNewsDTO request)
        {
            News model = _mapper.Map<News>(request);
            return Ok(_mapper.Map<NewsDTO>(await _newsService.UpdateNews(model)));
        }
    }
}
