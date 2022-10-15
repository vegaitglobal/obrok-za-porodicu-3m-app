using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Controllers
{
    [Route("api/newsletter-subscriptions")]
    [ApiController]
    public class NewsletterSubscriptionController : BaseController
    {
        private readonly INewsletterSubscriptionService _newsletterSubscriptionService;

        public NewsletterSubscriptionController(INewsletterSubscriptionService newsletterSubscriptionService)
        {
            _newsletterSubscriptionService = newsletterSubscriptionService;
        }

        [HttpGet("")]
        public async Task<IActionResult> GetNewsletterSubscriptions()
        {
            return Ok(await _newsletterSubscriptionService.GetNewsletterSubscriptions());
        }

        [HttpGet("campaign/{id:int}")]
        public async Task<IActionResult> GetSingleNewsletterSubscription([FromRoute] int id)
        {
            return Ok(await _newsletterSubscriptionService.GetSingleById(id));
        }
    }
}