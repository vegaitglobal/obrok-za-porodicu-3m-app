using AutoMapper;
using MealForFamily.Authorization;
using MealForFamily.DTOs;
using MealForFamily.Helpers.Exceptions;
using MealForFamily.Models;
using MealForFamily.RepositoryInterface;
using MealForFamily.ServiceInterfaces;

namespace MealForFamily.Services
{
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;
        private readonly IJwtUtils _jwtUtils;
        private readonly IMapper _mapper;

        public UserService(IUserRepository userRepository, IJwtUtils jwtUtils, IMapper mapper)
        {
            _userRepository = userRepository;
            _jwtUtils = jwtUtils;
            _mapper = mapper;
        }

        public async Task<AuthenticateResponse> Authenticate(AuthenticateRequest model)
        {
            User? user = await _userRepository.GetUserByEmail(model.Email);
            if (user == null)
                throw new CustomException("Bad Credentials", 400);

            if (!BCrypt.Net.BCrypt.Verify(model.Password, user.Password))
                throw new CustomException("Incorect password!", 400);

            var jwtToken = _jwtUtils.GenerateJwtToken(user);
            AuthenticateResponse response = _mapper.Map<AuthenticateResponse>(user);
            response.JwtToken = jwtToken;
            return response;
        }

        private async Task Register()
        {
            User user = new User()
            {
                Email = "",
                Password = BCrypt.Net.BCrypt.HashPassword("")
            };
            await _userRepository.Create(user);
        }
    }
}
