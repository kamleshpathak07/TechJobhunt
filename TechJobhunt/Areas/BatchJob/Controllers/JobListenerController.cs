using Microsoft.AspNetCore.Mvc;
using TechJobhunt.TechRepository.ILBusiness;

namespace TechJobhunt.Areas.BatchJob.Controllers
{
    [Area("BatchJob")]
    public class JobListenerController : Controller
    {
        private readonly ILJobFilter _iJobfilter;
        public JobListenerController(ILJobFilter lJobFilter)
        {
            _iJobfilter = lJobFilter;
        }
        [Route("/techpanel")]
        public IActionResult TechPanel(string tag, string type)
        {
            ViewBag.Description = _iJobfilter.GetJobMaster(tag, type);
            return View();
        }
    }
}
