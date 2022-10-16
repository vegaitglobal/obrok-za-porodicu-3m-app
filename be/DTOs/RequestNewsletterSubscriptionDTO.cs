using System.ComponentModel.DataAnnotations;

namespace MealForFamily.Dtos
{
    public class RequestNewsletterSubscriptionDTO
    {
        public int Id { get; set; }
        [EmailAddress]
        public string? Email { get; set; } = string.Empty;
    }
}
