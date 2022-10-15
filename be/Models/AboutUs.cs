using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace MealForFamily.Models
{
    public class AboutUs
    {
        [Key]
        public int Id { get; set; }
        public string RawDescription { get; set; } = string.Empty;

        public string? Description { get; set; } = string.Empty;
    }
}