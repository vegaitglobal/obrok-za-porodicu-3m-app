using AutoMapper;
using MealForFamily.Dtos;
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
            return Ok(await _newsService.GetNews());
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleNews([FromRoute] int id)
        {
            return Ok(await _newsService.GetSingleById(id));
        }

        [HttpPost("")]
        public async Task<IActionResult> CreateNews(RequestNewsDTO request)
        {
            News model = _mapper.Map<News>(request);
            return Ok(await _newsService.CreateNews(model));
        }

        [HttpPut("")]
        public async Task<IActionResult> UpdateNews(RequestNewsDTO request)
        {
            News model = _mapper.Map<News>(request);
            return Ok(await _newsService.UpdateNews(model));
        }
    }
}
