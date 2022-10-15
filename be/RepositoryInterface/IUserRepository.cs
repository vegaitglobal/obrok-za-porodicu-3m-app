using MealForFamily.Models;

namespace MealForFamily.RepositoryInterface
{
    public interface IUserRepository : IRepository<User>
    {
        Task<User?> GetUserByEmail(string email);
    }
}
