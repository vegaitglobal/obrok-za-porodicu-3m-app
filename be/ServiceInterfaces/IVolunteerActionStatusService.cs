using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface IVolunteerActionStatusService
    {
        Task<List<VolunteerActionStatus>> GetVolunteerActionStatuses();
        
        Task<VolunteerActionStatus> GetSingleById(int id);
    }
}