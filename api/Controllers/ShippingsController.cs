using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    public class ShippingsController : Controller
    {
        // GET api/shippings
        [HttpGet]
        public JsonResult Get()
        {
          Dictionary<string, int> defaults = new Dictionary<string, int>
          {
              { "maxDistance", 100 },
              { "kmPrice", 50 }
          };
          return Json(defaults);
        }
    }
}
