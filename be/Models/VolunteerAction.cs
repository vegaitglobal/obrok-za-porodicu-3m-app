using Newtonsoft.Json;
using System.ComponentModel.DataAnnotations;

namespace MealForFamily.Models
{
    public class VolunteerAction
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public VolunteerActionType? Type { get; set; }

        public int TypeId { get; set; }

        public string? ImageURL { get; set; } = string.Empty;

        [Required]
        public string? Title { get; set; } = string.Empty;

        [Required]
        public VolunteerActionStatus? Status { get; set; }

        public string? ShortDescription { get; set; } = string.Empty;

        public string? RawDescription { get; set; } = string.Empty;

        public string? Description { get; set; } = string.Empty;

        public string? ReferenceNumber { get; set; } = string.Empty;

        public ICollection<Donation>? Donations { get; set; }

        public bool IsDeleted { get; set; }
    }
}
