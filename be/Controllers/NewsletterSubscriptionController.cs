using Microsoft.AspNetCore.Mvc;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Controllers
{
    [Route("api/newsletter-subscription")]
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
    }
}