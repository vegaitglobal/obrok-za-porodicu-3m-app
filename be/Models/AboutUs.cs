using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace MealForFamily.Models
{
    public class AboutUs
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string RawDescription { get; set; } = string.Empty;

        [Required]
        public string Description { get; set; } = string.Empty;
    }
}
