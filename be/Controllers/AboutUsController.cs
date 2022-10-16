using AutoMapper;
using MealForFamily.Authorization;
using MealForFamily.Dtos;
using MealForFamily.Models;
using MealForFamily.ServiceInterface;
using Microsoft.AspNetCore.Mvc;

namespace MealForFamily.Controllers
{
    [Route("api/about-us")]
    [ApiController]
    public class AboutUsController : BaseController
    {
        private readonly IAboutUsService _aboutUsService;
        private readonly IMapper _mapper;

        public AboutUsController(IAboutUsService aboutUsService, IMapper mapper)
        {
            _aboutUsService = aboutUsService;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetAboutUs()
        {
            return Ok(await _aboutUsService.GetAboutUs());
        }

        [Authorize]
        [HttpPut("")]
        public async Task<IActionResult> UpdateAboutUs(RequestAboutUsDTO request)
        {
            AboutUs model = _mapper.Map<AboutUs>(request);
            return Ok(await _aboutUsService.UpdateAboutUs(model));
        }
    }
}
