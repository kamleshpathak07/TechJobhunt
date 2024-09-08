using TechJobhunt.TechRepository.ILBusiness;

namespace TechJobhunt.TechRepository.TRBusiness
{
    public class BLJobFilter : ILJobFilter
    {
        private readonly IWebHostEnvironment _env;
        private readonly string basepath = string.Empty;
        private readonly string baseDir = string.Empty;
        BLJobDescription bldescription = null;
        public BLJobFilter(IWebHostEnvironment env)
        {
            _env = env;
            basepath = _env.ContentRootPath;
            baseDir = "Response";
            bldescription = new(basepath, baseDir);

        }
        public string GetJobMaster(string area, string tag)
        {
            string targetContent = string.Empty;
            string path = area + "\\" + tag + ".txt";
            targetContent = bldescription.GetJobDescription(path);
            return targetContent;
        }
    }
}
