using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

using api.Settings;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class ShippingsController : Controller
    {

        private readonly IOptions<ShippingSettings> shippingSettings;
        private readonly IOptions<MapsSettings> mapsSettings;

        public ShippingsController(IOptions<ShippingSettings> ss, IOptions<MapsSettings> ms)
        {
            shippingSettings = ss;
            mapsSettings = ms;
        }

        // GET api/shippings
        [HttpGet]
        public JsonResult Get()
        {
            Dictionary<string, ISettings> defaults = new Dictionary<string, ISettings>
            {
                { "shippings", shippingSettings.Value },
                { "maps", mapsSettings.Value }
            };
            return Json(defaults);
        }
    }
}
