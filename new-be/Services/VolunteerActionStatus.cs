using AutoMapper;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Service
{
    public class VolunteerActionStatusService : IVolunteerActionStatusService
    {
        private readonly IVolunteerActionStatusRepository _volunteerActionStatusRepository;

        public VolunteerActionStatusService(IVolunteerActionStatusRepository volunteerActionStatusRepository)
        {
            _volunteerActionStatusRepository = volunteerActionStatusRepository;
        }

        public async Task<List<VolunteerActionStatus>> GetVolunteerActionStatuses()
        {
            return await _volunteerActionStatusRepository.GetVolunteerActionStatuses();
        }

        public async Task<VolunteerActionStatus> GetSingleById(int id)
        {
            return await _volunteerActionStatusRepository.GetById(id);
        }

        public async Task<VolunteerActionStatus> CreateVolunteerActionStatus(VolunteerActionStatus vas) {
            return await _volunteerActionStatusRepository.Create(vas);
        }

        public async Task<VolunteerActionStatus> UpdateVolunteerActionStatus(VolunteerActionStatus vas) {
            return await _volunteerActionStatusRepository.Update(vas);
        }
    }
}
