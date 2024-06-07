using Microsoft.AspNetCore.Mvc;

namespace TechJobhunt.Areas.BatchJob.Controllers
{
    public class JobListenerController : Controller
    {
        [Route("/techpanel")]
        public IActionResult TechPanel()
        {
            return View();
        }
    }
}
