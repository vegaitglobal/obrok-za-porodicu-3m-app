using Microsoft.AspNetCore.Mvc;

namespace MealForFamily.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {

        [HttpGet("test")]
        public IActionResult Test()
        {
            return Ok("Hello World :)");
        }
    }
}
