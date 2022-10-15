using MealForFamily.Models;

namespace MealForFamily.RepositoryInterface
{
    public interface IVolunteerActionTypeRepository : IRepository<VolunteerActionType>
    {
        Task<List<VolunteerActionType>> GetVolunteerActionTypes();
    }
}