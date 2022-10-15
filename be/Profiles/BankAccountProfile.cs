using AutoMapper;
using MealForFamily.Dtos;
using MealForFamily.Models;

namespace MealForFamily.Profiles
{
    public class BankAccountProfile : Profile
    {
        public BankAccountProfile()
        {
            CreateMap<RequestBankAccountDTO, BankAccount>();
        }
    }
}
