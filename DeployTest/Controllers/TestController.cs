using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DeployTest.Controllers
{
    [Route("api/users")]
    [ApiController]
    public class TestController : ControllerBase
    {
        [HttpGet] 
        public IActionResult GetUsers()
        {
            var users = new[]
            {
                new {Name = "Muhammad Abdulloh"},
                new {Name = "Muhammad Yusuf"}
            };

            return Ok(users);
        }
    }
}
