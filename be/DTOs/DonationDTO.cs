namespace MealForFamily.DTOs
{
    public class DonationDTO
    {
        public int Id { get; set; }

        public VolunteerActionTypeDTO? VolunteerActionType { get; set; }

        public bool? IsCompany { get; set; } = false;

        public string? CompanyName { get; set; }

        public string FullName { get; set; } = string.Empty;

        public string Email { get; set; } = string.Empty;

        public string PhoneNumber { get; set; } = string.Empty;

        public string? Description { get; set; }

        public bool? IsPickup { get; set; } = false;

        public string? Address { get; set; }

        public VolunteerActionDTO? VolunteerAction { get; set; }
    }
}
