using MealForFamily.Models;

namespace MealForFamily.RepositoryInterface
{
    public interface IVolunteerActionRepository : IRepository<VolunteerAction>
    {
        Task<List<VolunteerAction>> GetVolunteerActions();

        Task<VolunteerAction> GetSingleById(int id);
    }
}
