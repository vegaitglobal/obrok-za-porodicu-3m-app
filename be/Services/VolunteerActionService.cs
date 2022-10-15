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

        public async Task<Page<VolunteerAction>> GetVolunteerActions(int pageNumber, int pageSize)
        {
            return await _volunteerActionRepository.GetAllByPage(pageNumber, pageSize);
        }

        public async Task<VolunteerAction> GetSingleById(int id)
        {
            return await _volunteerActionRepository.GetById(id);
        }

        public async Task<VolunteerAction> CreateVolunteerAction(VolunteerAction va) {
            return await _volunteerActionRepository.Create(va);
        }

        public async Task<VolunteerAction> UpdateVolunteerAction(VolunteerAction va) {
            return await _volunteerActionRepository.Update(va);
        }
    }
}
