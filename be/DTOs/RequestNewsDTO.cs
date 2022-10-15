namespace MealForFamily.Dtos
{
    public class RequestNewsDTO
    {
        public int Id { get; set; }
        public string? ImageURL { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string? ShortDescription { get; set; } = string.Empty;
        public string? RawDescrition { get; set; } = string.Empty;
        public string? Descrition { get; set; } = string.Empty;
    }
}
