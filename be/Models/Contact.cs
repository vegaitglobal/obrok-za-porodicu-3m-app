using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace MealForFamily.Models
{
    public class Contact
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Title { get; set; } = string.Empty;

        public string? Email { get; set; } = string.Empty;

        public string? PhoneNumber { get; set; } = string.Empty;
        public bool IsDeleted { get; set; }
    }
}
