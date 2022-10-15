using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface IVolunteerActionService
    {
        Task<List<VolunteerAction>> GetVolunteerActions();

        Task<VolunteerAction> GetSingleById(int id);

        Task<VolunteerAction> CreateVolunteerAction(VolunteerAction va);

        Task<VolunteerAction> UpdateVolunteerAction(VolunteerAction va);
    }
}
