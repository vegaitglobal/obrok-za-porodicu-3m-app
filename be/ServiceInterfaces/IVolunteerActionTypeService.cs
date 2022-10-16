using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface IVolunteerActionTypeService
    {
        Task<List<VolunteerActionType>> GetVolunteerActionTypes();

        Task<VolunteerActionType> GetSingleById(int id);

        Task<VolunteerActionType> CreateVolunteerActionType(VolunteerActionType vat);

        Task<VolunteerActionType> UpdateVolunteerActionType(VolunteerActionType vat);
        Task DeleteVolunteerActionType(int id);
    }
}
