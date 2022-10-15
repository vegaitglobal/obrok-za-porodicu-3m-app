namespace MealForFamily.Dtos
{
    public class RequestContactDTO
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string? Email { get; set; } = string.Empty;
        public string? PhoneNumber { get; set; } = string.Empty;
    }
}
