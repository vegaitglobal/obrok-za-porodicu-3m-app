using AutoMapper;
using MealForFamily.Authorization;
using MealForFamily.Dtos;
using MealForFamily.DTOs;
using MealForFamily.Models;
using MealForFamily.ServiceInterface;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

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
        public async Task<IActionResult> GetNews([RequiredAttribute] int pageNumber, [RequiredAttribute] int pageSize)
        {
            List<NewsDTO> dtos = new();
            Page<News> news = await _newsService.GetNews(pageNumber, pageSize);
            foreach (News news1 in news.Content)
                dtos.Add(_mapper.Map<NewsDTO>(news1));

            return Ok(new Page<NewsDTO>(pageNumber, pageSize, news.Pagination.TotalPages, news.Pagination.TotalResults, dtos));
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleNews([FromRoute] int id)
        {
            return Ok(_mapper.Map<NewsDTO>(await _newsService.GetSingleById(id)));
        }

        [Authorize]
        [HttpPost("")]
        public async Task<IActionResult> CreateNews(RequestNewsDTO request)
        {
            News model = _mapper.Map<News>(request);
            return Ok(_mapper.Map<NewsDTO>(await _newsService.CreateNews(model)));
        }

        [Authorize]
        [HttpPut("")]
        public async Task<IActionResult> UpdateNews(RequestNewsDTO request)
        {
            News model = _mapper.Map<News>(request);
            return Ok(_mapper.Map<NewsDTO>(await _newsService.UpdateNews(model)));
        }

        [Authorize]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteNews(int id)
        {
            await _newsService.DeleteNews(id);
            return Ok("News deleted successfully");
        }
    }
}
