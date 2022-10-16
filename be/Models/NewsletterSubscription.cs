using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace MealForFamily.Models
{
    public class NewsletterSubscription
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;
        public bool IsDeleted { get; set; }
    }
}
