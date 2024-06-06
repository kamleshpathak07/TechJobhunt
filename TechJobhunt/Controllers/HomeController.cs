using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using TechJobhunt.Models;
namespace TechJobhunt.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        public IActionResult Index()
        {
            return View();
        }
        [Route("/aboutus")]
        public IActionResult AboutUs()
        {
            return View();
        }
        [Route("/contactus")]
        public IActionResult ContactUs()
        {
            return View();
        }
        [Route("/privacy-policy")]
        public IActionResult Privacy()
        {
            return View();
        }
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
