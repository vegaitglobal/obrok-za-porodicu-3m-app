using AutoMapper;
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
            return await _volunteerActionTypeRepository.GetById(id);
        }
    }
}