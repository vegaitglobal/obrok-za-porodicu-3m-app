using MealForFamily.Models;

namespace MealForFamily.ServiceInterface
{
    public interface IVolunteerActionTypeService
    {
        Task<List<VolunteerActionType>> GetVolunteerActionTypes();
        
        Task<VolunteerActionType> GetSingleById(int id);
    }
}