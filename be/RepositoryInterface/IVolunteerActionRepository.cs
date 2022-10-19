using MealForFamily.Models;
using MealForFamily.Dtos;

namespace MealForFamily.RepositoryInterface
{
    public interface IVolunteerActionRepository : IRepository<VolunteerAction>
    {
        Task<VolunteerAction> GetSingleById(int id);
        public Task<Page<VolunteerAction>> GetAllByPage(VolunteerActionFilterDTO filters, int pageNumber, int pageSize);

        Task<List<VolunteerAction>> GetVolunteerActions();
    }
}
