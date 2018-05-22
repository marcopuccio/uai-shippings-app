
namespace api.Settings
{
    public class MapsSettings : ISettings
    {
        public int zoom { get; set; }
        public string type { get; set; }
        public MapCenter center { get; set; }
    }
}
