using MealForFamily.Models;

namespace MealForFamily.Dtos
{
    public class RequestVolunteerActionDTO
    {
        public int Id { get; set; }
        public int TypeId { get; set; }
        public string ImageURL { get; set; } = string.Empty;
        public string? Title { get; set; } = string.Empty;
        public int StatusId { get; set; }
        public string? ShortDescription { get; set; } = string.Empty;
        public string? RawDescription { get; set; } = string.Empty;
        public string? Description { get; set; } = string.Empty;
        public string? ReferenceNumber { get; set; } = string.Empty;
    }
}
