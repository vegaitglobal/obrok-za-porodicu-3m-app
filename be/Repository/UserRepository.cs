using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.Repositories;
using MealForFamily.RepositoryInterface;

namespace MealForFamily.Repository
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(DataContext context) : base(context)
        {
        }
    }
}
