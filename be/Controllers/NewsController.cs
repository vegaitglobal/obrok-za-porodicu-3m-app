using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Controllers
{
    [Route("api/news")]
    [ApiController]
    public class NewsController : BaseController
    {
        private readonly INewsService _newsService;

        public NewsController(INewsService newsService)
        {
            _newsService = newsService;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetNews()
        {
            return Ok(await _newsService.GetNews());
        }
    }
}