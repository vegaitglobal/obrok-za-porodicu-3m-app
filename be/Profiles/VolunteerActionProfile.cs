using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.DTOs;
using MealForFamily.Models;

namespace MealForFamily.Profiles
{
    public class VolunteerActionProfile : Profile
    {
        public VolunteerActionProfile()
        {
            CreateMap<RequestVolunteerActionDTO, VolunteerAction>().AfterMap((src, dest, cntx) =>
            {
                dest.Type = new();
                dest.Status = new();
            });
            CreateMap<VolunteerAction, VolunteerActionDTO>().AfterMap((src, dest, cntx) =>
            {
                if (src.Type != null)
                    dest.Type = cntx.Mapper.Map<VolunteerActionTypeDTO>(src.Type);

                if (src.Status != null)
                    dest.Status = cntx.Mapper.Map<VolunteerActionStatusDTO>(src.Status);
            });
        }
    }
}
