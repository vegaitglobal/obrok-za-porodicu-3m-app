using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace MealForFamily.Models
{
    public class News
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string? ImageURL { get; set; } = string.Empty;

        public string Title { get; set; } = string.Empty;

        public string? ShortDescription { get; set; } = string.Empty;

        public string? RawDescrition { get; set; } = string.Empty;

        public string? Descrition { get; set; } = string.Empty;
    }
}