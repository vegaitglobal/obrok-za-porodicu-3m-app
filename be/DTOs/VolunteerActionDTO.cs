namespace MealForFamily.DTOs
{
    public class VolunteerActionDTO
    {
        public int Id { get; set; }
        public VolunteerActionTypeDTO? Type { get; set; }
        public string? ImageURL { get; set; } = string.Empty;
        public string? Title { get; set; } = string.Empty;
        public VolunteerActionStatusDTO? Status { get; set; }
        public string? ShortDescription { get; set; } = string.Empty;
        public string? RawDescription { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public string? ReferenceNumber { get; set; } = string.Empty;
    }
}
