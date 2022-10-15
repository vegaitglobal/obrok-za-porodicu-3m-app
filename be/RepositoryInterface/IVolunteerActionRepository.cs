using MealForFamily.Models;

namespace MealForFamily.RepositoryInterface
{
    public interface IVolunteerActionRepository : IRepository<VolunteerAction>
    {
        Task<VolunteerAction> GetSingleById(int id);
        new Task<Page<VolunteerAction>> GetAllByPage(int pageNumber, int pageSize);
    }
}
