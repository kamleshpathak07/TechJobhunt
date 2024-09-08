using System.IO;
namespace TechJobhunt.TechRepository.TRBusiness
{
    public class BLJobDescription
    {
        private readonly string basePath = "";
        private readonly string baseDir = "";
        public BLJobDescription(string basepath, string baseDir)
        {
            this.basePath = basepath;
            this.baseDir = baseDir;
        }
        public string GetJobDescription(string path)
        {
            string result = string.Empty;
            if (path == null)
            {
                return string.Empty;
            }
            string fullpath = Path.Combine(basePath, baseDir, path);
            if (File.Exists(fullpath))
            {
                using (StreamReader sw = new StreamReader(fullpath))
                {
                    result = sw.ReadToEnd();
                }
            }
            return result;
        }
    }
}
