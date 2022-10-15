using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface IVolunteerActionStatusService
    {
        Task<List<VolunteerActionStatus>> GetVolunteerActionStatuses();

        Task<VolunteerActionStatus> GetSingleById(int id);

        Task<VolunteerActionStatus> CreateVolunteerActionStatus(VolunteerActionStatus vas);

        Task<VolunteerActionStatus> UpdateVolunteerActionStatus(VolunteerActionStatus vas);
    }
}
