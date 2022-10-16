using AutoMapper;
using MealForFamily.Helpers.Exceptions;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using MealForFamily.ServiceInterface;

namespace MealForFamily.Service
{
    public class VolunteerActionStatusService : IVolunteerActionStatusService
    {
        private readonly IVolunteerActionStatusRepository _volunteerActionStatusRepository;
        private readonly IMapper _mapper;

        public VolunteerActionStatusService(IVolunteerActionStatusRepository volunteerActionStatusRepository, IMapper mapper)
        {
            _volunteerActionStatusRepository = volunteerActionStatusRepository;
            _mapper = mapper;
        }

        public async Task<List<VolunteerActionStatus>> GetVolunteerActionStatuses()
        {
            return await _volunteerActionStatusRepository.GetVolunteerActionStatuses();
        }

        public async Task<VolunteerActionStatus> GetSingleById(int id)
        {
            VolunteerActionStatus status = await _volunteerActionStatusRepository.GetById(id);
            if (status == null)
                throw new CustomException("Volunteer Action Status not found", 404);

            return status;
        }

        public async Task<VolunteerActionStatus> CreateVolunteerActionStatus(VolunteerActionStatus vas)
        {
            return await _volunteerActionStatusRepository.Create(vas);
        }

        public async Task<VolunteerActionStatus> UpdateVolunteerActionStatus(VolunteerActionStatus vas)
        {
            return await _volunteerActionStatusRepository.Update(vas);
        }
    }
}
