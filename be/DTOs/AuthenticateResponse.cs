namespace MealForFamily.DTOs
{
    public class AuthenticateResponse
    {
        public int Id { get; set; }
        public string JwtToken { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
    }
}
