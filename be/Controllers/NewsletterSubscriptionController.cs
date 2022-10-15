using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.Models;
using MealForFamily.ServiceInterface;
using Microsoft.AspNetCore.Mvc;

namespace MealForFamily.Controllers
{
    [Route("api/newsletter-subscriptions")]
    [ApiController]
    public class NewsletterSubscriptionController : BaseController
    {
        private readonly INewsletterSubscriptionService _newsletterSubscriptionService;
        private readonly IMapper _mapper;

        public NewsletterSubscriptionController(INewsletterSubscriptionService newsletterSubscriptionService, IMapper mapper)
        {
            _newsletterSubscriptionService = newsletterSubscriptionService;
            _mapper = mapper;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetNewsletterSubscriptions()
        {
            return Ok(await _newsletterSubscriptionService.GetNewsletterSubscriptions());
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleNewsletterSubscription([FromRoute] int id)
        {
            return Ok(await _newsletterSubscriptionService.GetSingleById(id));
        }

        [HttpPost("")]
        public async Task<IActionResult> CreateNewsletterSubscription(RequestNewsletterSubscriptionDTO request)
        {
            NewsletterSubscription model = _mapper.Map<NewsletterSubscription>(request);
            return Ok(await _newsletterSubscriptionService.CreateNewsletterSubscription(model));
        }

        [HttpPut("")]
        public async Task<IActionResult> UpdateNewsletterSubscription(RequestNewsletterSubscriptionDTO request)
        {
            NewsletterSubscription model = _mapper.Map<NewsletterSubscription>(request);
            return Ok(await _newsletterSubscriptionService.UpdateNewsletterSubscription(model));
        }
    }
}
