namespace MealForFamily.DTOs
{
    public class NewsDTO
    {
        public int Id { get; set; }

        public string ImageURL { get; set; } = string.Empty;

        public string Title { get; set; } = string.Empty;

        public string? ShortDescription { get; set; } = string.Empty;

        public string? RawDescription { get; set; } = string.Empty;

        public string? Description { get; set; } = string.Empty;
    }
}
