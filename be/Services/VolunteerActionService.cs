using MealForFamily.Helpers.Exceptions;
using MealForFamily.Models;
using MealForFamily.Dtos;
using MealForFamily.RepositoryInterface;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Service
{
    public class VolunteerActionService : IVolunteerActionService
    {
        private readonly IVolunteerActionRepository _volunteerActionRepository;

        public VolunteerActionService(IVolunteerActionRepository volunteerActionRepository)
        {
            _volunteerActionRepository = volunteerActionRepository;
        }

        public async Task<Page<VolunteerAction>> GetVolunteerActions(VolunteerActionFilterDTO filters, int pageNumber, int pageSize)
        {
            return await _volunteerActionRepository.GetAllByPage(filters, pageNumber, pageSize);
        }

        public async Task<VolunteerAction> GetSingleById(int id)
        {
            VolunteerAction action = await _volunteerActionRepository.GetSingleById(id);
            if (action == null)
                throw new CustomException("Volunteer Action not found", 404);

            return action;
        }

        public async Task<VolunteerAction> CreateVolunteerAction(VolunteerAction va)
        {
            return await _volunteerActionRepository.Create(va);
        }

        public async Task<VolunteerAction> UpdateVolunteerAction(VolunteerAction va)
        {
            return await _volunteerActionRepository.Update(va);
        }

        public async Task DeleteVolunteerAction(int id)
        {
            VolunteerAction action = await _volunteerActionRepository.GetSingleById(id);
            if (action == null)
                throw new CustomException("Volunteer Action not found", 404);

            action.IsDeleted = true;
            await _volunteerActionRepository.Update(action);
        }

        public async Task<List<VolunteerAction>> GetAllVolunteerActions()
        {
            return await _volunteerActionRepository.GetVolunteerActions();
        }

    }
}
