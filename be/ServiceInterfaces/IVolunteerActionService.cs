using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface IVolunteerActionService
    {
        Task<List<VolunteerAction>> GetVolunteerActions();
    }
}