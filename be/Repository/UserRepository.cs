using MealForFamily.Data;
using MealForFamily.Models;
using MealForFamily.Repositories;
using MealForFamily.RepositoryInterface;
using Microsoft.EntityFrameworkCore;

namespace MealForFamily.Repository
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(DataContext context) : base(context) { }

        public async Task<User?> GetUserByEmail(string email)
        {
            return await _context.Users.Where(x => x.Email == email).FirstOrDefaultAsync();
        }
    }
}
