using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;
using MealForFamily.Dtos;
using MealForFamily.Models;

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

        [HttpPut("")]
        public async Task<IActionResult> UpdateAboutUs(RequestAboutUsDTO request)
        {
            // TODO: Fix AutoMapper
            // AboutUs model = _mapper.Map<RequestAboutUsDTO>(request);

            AboutUs model = new();
            model.Id = request.Id;
            model.RawDescription = request.RawDescription;
            model.Description = request.Description;

            return Ok(await _aboutUsService.UpdateAboutUs(model));
        }
    }
}
