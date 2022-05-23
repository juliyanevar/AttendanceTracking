using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;

namespace CourseProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoggerController : ControllerBase
    {
        [HttpGet]
        public JsonResult GetReport()
        {
            return new JsonResult(Logger.log);
        }
    }
}
