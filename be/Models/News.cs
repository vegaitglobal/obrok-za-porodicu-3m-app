using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace MealForFamily.Models
{
    public class News
    {
        [Key]
        public int Id { get; set; }

        public string ImageURL { get; set; } = string.Empty;

        [Required]
        public string Title { get; set; } = string.Empty;

        public string? ShortDescription { get; set; } = string.Empty;

        public string? RawDescription { get; set; } = string.Empty;

        public string? Description { get; set; } = string.Empty;

        public bool IsDeleted { get; set; }
    }
}
