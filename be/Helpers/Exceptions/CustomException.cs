namespace MealForFamily.Helpers.Exceptions
{
    public class CustomException : ApplicationException
    {
        public CustomException(string msg, int statusCode) : base(
             String.Format("{0}", msg))
        {
            StatusCode = statusCode;
        }
    }
}
