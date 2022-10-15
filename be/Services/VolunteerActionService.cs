using AutoMapper;
using MealForFamily.Models;
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

        public async Task<List<VolunteerAction>> GetVolunteerActions()
        {
            return await _volunteerActionRepository.GetVolunteerActions();
        }

        public async Task<VolunteerAction> GetSingleById(int id)
        {
            return await _volunteerActionRepository.GetById(id);
        }
    }
}