namespace MealForFamily.Helpers.Exceptions
{
    public class ApplicationException : Exception
    {
        public int StatusCode { get; set; }

        protected ApplicationException(string message) : base(message) { }
    }
}
