namespace MealForFamily.Dtos
{
    public class RequestAboutUsDTO
    {
        public int Id { get; set; }
        public string RawDescription { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
    }
}
