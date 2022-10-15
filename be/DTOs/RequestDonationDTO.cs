namespace MealForFamily.Dtos
{
    public class RequestDonationDTO
    {
        public int Id { get; set; }
        public int? VolunteerActionTypeId { get; set; }
        public bool? IsCompany { get; set; } = false;
        public string? CompanyName { get; set; }
        public string FullName { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string? Description { get; set; }
        public bool? IsPickup { get; set; } = false;

        public string? Address { get; set; }
        public int? VolunteerActionId { get; set; }
    }
}
