
using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace MealForFamily.Models
{
    public class VolunteerActionStatus
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        [JsonIgnore]
        public ICollection<VolunteerAction>? VolunteerActions { get; set; }
    }
}
