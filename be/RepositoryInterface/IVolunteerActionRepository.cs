using MealForFamily.Models;

namespace MealForFamily.RepositoryInterface
{
    public interface IVolunteerActionRepository : IRepository<VolunteerAction>
    {
        Task<VolunteerAction> GetSingleById(int id);
    }
}
