using AutoMapper;
using MealForFamily.Authorization;
using MealForFamily.Dtos;
using MealForFamily.DTOs;
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
            List<NewsletterSubscriptionDTO> dtos = new();
            List<NewsletterSubscription> subscriptions = await _newsletterSubscriptionService.GetNewsletterSubscriptions();
            foreach (NewsletterSubscription subscription in subscriptions)
                dtos.Add(_mapper.Map<NewsletterSubscriptionDTO>(subscription));

            return Ok(dtos);
        }

        [HttpGet("{id:int}")]
        public async Task<IActionResult> GetSingleNewsletterSubscription([FromRoute] int id)
        {
            return Ok(_mapper.Map<NewsletterSubscriptionDTO>(await _newsletterSubscriptionService.GetSingleById(id)));
        }

        [HttpPost("")]
        public async Task<IActionResult> CreateNewsletterSubscription(RequestNewsletterSubscriptionDTO request)
        {
            NewsletterSubscription model = _mapper.Map<NewsletterSubscription>(request);
            return Ok(_mapper.Map<NewsletterSubscriptionDTO>(await _newsletterSubscriptionService.CreateNewsletterSubscription(model)));
        }

        [Authorize]
        [HttpPut("")]
        public async Task<IActionResult> UpdateNewsletterSubscription(RequestNewsletterSubscriptionDTO request)
        {
            NewsletterSubscription model = _mapper.Map<NewsletterSubscription>(request);
            return Ok(_mapper.Map<NewsletterSubscriptionDTO>(await _newsletterSubscriptionService.UpdateNewsletterSubscription(model)));
        }

        [Authorize]
        [HttpDelete("{id:int}")]
        public async Task<IActionResult> DeleteNewsletterSubscription(int id)
        {
            await _newsletterSubscriptionService.DeleteNewsletterSubscription(id);
            return Ok("Newsletter Subscription deleted successfully");
        }
    }
}
