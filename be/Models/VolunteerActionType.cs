using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace MealForFamily.Models
{
    public class VolunteerActionType
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; } = string.Empty;

        public bool? HasPickup { get; set; } = true;

        public bool? HasPayment { get; set; } = false;

        public ICollection<Donation>? Donations { get; set; }

        [JsonIgnore]
        public ICollection<VolunteerAction>? VolunteerActions { get; set; }
        public bool IsDeleted { get; set; }
    }
}
