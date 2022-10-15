using MealForFamily.Data;

namespace MealForFamily.Authorization
{
    public class JwtMiddleware
    {
        private readonly RequestDelegate _next;

        public JwtMiddleware(RequestDelegate next)
        {
            _next = next;
        }

        public async Task Invoke(HttpContext context, DataContext dataContext, IJwtUtils jwtUtils)
        {
            var token = context.Request.Headers["Authorization"].FirstOrDefault()?.Split(" ").Last();

            var userId = jwtUtils.ValidateJwtToken(token);
            if (userId != null)
                context.Items["User"] = await dataContext.Users.FindAsync(userId.Value);

            await _next(context);
        }
    }
}
