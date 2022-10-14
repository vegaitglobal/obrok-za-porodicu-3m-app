using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Controllers
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
