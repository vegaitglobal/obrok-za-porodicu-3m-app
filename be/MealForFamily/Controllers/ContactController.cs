using Microsoft.AspNetCore.Mvc;
using MealForFamily.Models;

namespace MealForFamily.Controllers;

[Route("[controller]")]
[ApiController]
public class ContactController : ControllerBase
{
    private readonly MealForFamilyDbContext _DBcontext;

    public ContactController(MealForFamilyDbContext context)
    {
        _DBcontext = context;
    }

    [HttpGet]
    public IActionResult Get()
    {
        var contacts = this._DBcontext.Contacts.ToList();
        return Ok(contacts);
    }
}
