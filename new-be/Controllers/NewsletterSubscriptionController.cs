using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;
using MealForFamily.Dtos;
using MealForFamily.Models;

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
            // TODO: Fix AutoMapper
            // NewsletterSubscription model = _mapper.Map<RequestNewsletterSubscriptionDTO>(request);

            NewsletterSubscription model = new();
            model.Email = request.Email;

            return Ok(await _newsletterSubscriptionService.CreateNewsletterSubscription(model));
        }

        [HttpPut("")]
        public async Task<IActionResult> UpdateNewsletterSubscription(RequestNewsletterSubscriptionDTO request)
        {
            // TODO: Fix AutoMapper
            // NewsletterSubscription model = _mapper.Map<RequestNewsletterSubscriptionDTO>(request);

            NewsletterSubscription model = new();
            model.Id = request.Id;
            model.Email = request.Email;

            return Ok(await _newsletterSubscriptionService.UpdateNewsletterSubscription(model));
        }
    }
}
