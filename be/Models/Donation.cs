using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace MealForFamily.Models
{
    public class Donation
    {
        [Key]
        public int Id { get; set; }

        public VolunteerActionType? VolunteerActionType { get; set; }

        public bool? IsCompany { get; set; } = false;

        public string? CompanyName { get; set; }

        [Required]
        public string FullName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string PhoneNumber { get; set; } = string.Empty;

        public string? Description { get; set; }

        public bool? IsPickup { get; set; } = false;

        public string? Address { get; set; }

        public VolunteerAction? VolunteerAction { get; set; }

        public bool IsDeleted { get; set; }
    }
}
