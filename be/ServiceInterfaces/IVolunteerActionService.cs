using MealForFamily.Models;
using MealForFamily.Dtos;

namespace MealForFamily.ServiceInterface
{
    public interface IVolunteerActionService
    {
        Task<Page<VolunteerAction>> GetVolunteerActions(VolunteerActionFilterDTO filters, int pageNumber, int pageSize);

        Task<VolunteerAction> GetSingleById(int id);

        Task<VolunteerAction> CreateVolunteerAction(VolunteerAction va);

        Task<VolunteerAction> UpdateVolunteerAction(VolunteerAction va);
        Task DeleteVolunteerAction(int id);

        Task<List<VolunteerAction>> GetAllVolunteerActions();
    }
}
