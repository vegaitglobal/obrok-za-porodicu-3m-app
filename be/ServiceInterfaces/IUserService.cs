using MealForFamily.DTOs;

namespace MealForFamily.ServiceInterfaces
{
    public interface IUserService
    {
        Task<AuthenticateResponse> Authenticate(AuthenticateRequest model);
    }
}
