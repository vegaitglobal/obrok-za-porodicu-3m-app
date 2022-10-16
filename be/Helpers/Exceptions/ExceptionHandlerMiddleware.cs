using Newtonsoft.Json;
using System.Text;

namespace MealForFamily.Helpers.Exceptions
{
    public class ExceptionHandlerMiddleware
    {
        private readonly RequestDelegate _next;

        public ExceptionHandlerMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context)
        {
            try
            {
                await _next(context);
            }
            catch (ApplicationException ae)
            {
                await Reply(context, statusCode: ae.StatusCode, message: ae.Message);
            }
            catch (Exception e)
            {
                await Reply(context, statusCode: 500, message: "Error: " + e.Message + " " + e.StackTrace);
            }
        }

        private async Task Reply(HttpContext context, int statusCode, string message)
        {
            context.Response.StatusCode = statusCode;
            context.Response.ContentType = "application/json; charset=utf-8";

            var error = new ApiError
            {
                StatusCode = statusCode,
                Message = message,
            };
            var jsonError = JsonConvert.SerializeObject(error);
            await context.Response.WriteAsync(jsonError, Encoding.UTF8);
        }
    }
}
