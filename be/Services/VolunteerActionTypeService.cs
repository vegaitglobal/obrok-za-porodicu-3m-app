using MealForFamily.Helpers.Exceptions;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Service
{
    public class VolunteerActionTypeService : IVolunteerActionTypeService
    {
        private readonly IVolunteerActionTypeRepository _volunteerActionTypeRepository;

        public VolunteerActionTypeService(IVolunteerActionTypeRepository volunteerActionTypeRepository)
        {
            _volunteerActionTypeRepository = volunteerActionTypeRepository;
        }

        public async Task<List<VolunteerActionType>> GetVolunteerActionTypes()
        {
            return await _volunteerActionTypeRepository.GetVolunteerActionTypes();
        }

        public async Task<VolunteerActionType> GetSingleById(int id)
        {
            VolunteerActionType type = await _volunteerActionTypeRepository.GetSingleById(id);
            if (type == null)
                throw new CustomException("Volunteer Action Type not found", 404);

            return type;
        }

        public async Task<VolunteerActionType> CreateVolunteerActionType(VolunteerActionType vat)
        {
            return await _volunteerActionTypeRepository.Create(vat);
        }

        public async Task<VolunteerActionType> UpdateVolunteerActionType(VolunteerActionType vat)
        {
            return await _volunteerActionTypeRepository.Update(vat);
        }

        public async Task DeleteVolunteerActionType(int id)
        {
            VolunteerActionType type = await _volunteerActionTypeRepository.GetSingleById(id);
            if (type == null)
                throw new CustomException("Volunteer Action Type not found", 404);

            type.IsDeleted = true;
            await _volunteerActionTypeRepository.Update(type);
        }
    }
}
