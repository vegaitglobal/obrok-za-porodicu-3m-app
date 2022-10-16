using MealForFamily.Authorization;
using MealForFamily.DTOs;
using MealForFamily.ServiceInterfaces;
using Microsoft.AspNetCore.Mvc;

namespace MealForFamily.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : BaseController
    {
        private readonly IUserService _userService;

        public UserController(IUserService userService)
        {
            _userService = userService;
        }

        [AllowAnonymous]
        [HttpPost("authenticate")]
        public async Task<IActionResult> Authenticate(AuthenticateRequest request)
        {
            AuthenticateResponse response = await _userService.Authenticate(request);
            return Ok(response);
        }
    }
}
