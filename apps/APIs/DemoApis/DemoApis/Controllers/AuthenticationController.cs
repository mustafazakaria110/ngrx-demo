using Core.Features.Authentication.Login;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Security.Authentication;

namespace DemoApis.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AuthenticationController : ControllerBase
  {
    private readonly IMediator _mediator;
    public AuthenticationController(IMediator mediator)
    {
      this._mediator = mediator;
    }
    [HttpGet("test")]
    public async Task<ActionResult> test()
    {
      return Ok("test");
    }



    [HttpPost("login")]
    public async Task<ActionResult<string>> Login([FromBody] Model model)
    {
      if (model == null || string.IsNullOrEmpty(model.Username) || string.IsNullOrEmpty(model.Passward))
      {
        return BadRequest("Invalid username or password");
      }

      try
      {
        var command = new LoginCommand
        {
          UserName = model.Username,
          Passward = model.Passward
        };

        await _mediator.Send(command);
        return Ok("Login successful"); // You may want to return a token or user details here
      }
      catch (Exception ex)
      {
        // Log the exception (you might use a logging framework here)
        return StatusCode(500, "Internal server error");
      }
    }
  }
  public class Model
  {
    public string Username { get; set; } = string.Empty;
    public string Passward { get; set; } = string.Empty;
  }
}
