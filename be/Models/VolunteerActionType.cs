using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

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

        public ICollection<VolunteerAction>? VolunteerActions { get; set; }
    }
}
