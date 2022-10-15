using MealForFamily.Models;

namespace MealForFamily.RepositoryInterface
{
    public interface IVolunteerActionStatusRepository : IRepository<VolunteerActionStatus>
    {
        Task<List<VolunteerActionStatus>> GetVolunteerActionStatuses();

        Task<VolunteerActionStatus> GetSingleById(int id);
    }
}
