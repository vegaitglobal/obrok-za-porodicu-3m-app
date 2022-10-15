using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;
using MealForFamily.Dtos;
using MealForFamily.Models;

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

        [HttpGet("/{id:int}")]
        public async Task<IActionResult> GetSingleNews([FromRoute] int id)
        {
            return Ok(await _newsService.GetSingleById(id));
        }

        [HttpPost("/create")]
        public async Task<IActionResult> CreateNews(RequestNewsDTO request)
        {
            // TODO: Fix AutoMapper
            // News model = _mapper.Map<RequestNewsDTO>(request);

            News model = new();
            model.ImageURL = request.ImageURL;
            model.Title = request.Title;
            model.ShortDescription = request.ShortDescription;
            model.RawDescrition = request.RawDescrition;
            model.Descrition = request.Descrition;

            return Ok(await _newsService.CreateNews(model));
        }

        [HttpPost("/update")]
        public async Task<IActionResult> UpdateNews(RequestNewsDTO request)
        {
            // TODO: Fix AutoMapper
            // News model = _mapper.Map<RequestNewsDTO>(request);

            News model = new();
            model.Id = request.Id;
            model.ImageURL = request.ImageURL;
            model.Title = request.Title;
            model.ShortDescription = request.ShortDescription;
            model.RawDescrition = request.RawDescrition;
            model.Descrition = request.Descrition;

            return Ok(await _newsService.UpdateNews(model));
        }
    }
}
