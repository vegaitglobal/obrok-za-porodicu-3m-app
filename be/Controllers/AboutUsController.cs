using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Controllers
{
    [Route("api/about-us")]
    [ApiController]
    public class AboutUsController : BaseController
    {
        private readonly IAboutUsService _aboutUsService;

        public AboutUsController(IAboutUsService aboutUsService)
        {
            _aboutUsService = aboutUsService;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAboutUs()
        {
            return Ok(await _aboutUsService.GetAboutUs());
        }
    }
}