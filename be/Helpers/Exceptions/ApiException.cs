namespace MealForFamily.Helpers.Exceptions
{
    public class ApiError
    {
        public int StatusCode { get; set; }
        public string Message { get; set; } = string.Empty;
    }
}
