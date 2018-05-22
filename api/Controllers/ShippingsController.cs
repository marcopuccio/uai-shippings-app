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

        private readonly IOptions<ShippingSettings> _shippingSettings;

        public ShippingsController(IOptions<ShippingSettings> ss)
        {
            _shippingSettings = ss;
        }

        // GET api/shippings
        [HttpGet]
        public JsonResult Get()
        {
            //   Dictionary<string, int> defaults = new Dictionary<string, int>
            //   {
            //       { "maxDistance", 100 },
            //       { "kmPrice", 50 }
            //   };
            return Json(_shippingSettings.Value);
        }
    }
}
