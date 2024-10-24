using Core.Application.Features.Authentication.Login;
using Core.Application.Models;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;

namespace APIs.Controllers
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
    public async Task<ActionResult<AuthenticationUserModel>> Login([FromBody] LoginCommand model)
    {
      if (model == null || string.IsNullOrEmpty(model.UserName) || string.IsNullOrEmpty(model.Passward))
      {
        return BadRequest("Invalid username or password");
      }

      try
      {
        var command = new LoginCommand
        {
          UserName = model.UserName,
          Passward = model.Passward
        };

        AuthenticationUserModel? AuthenticationUserModel = await _mediator.Send(command);
        return Ok(AuthenticationUserModel); // You may want to return a token or user details here
      }
      catch (Exception ex)
      {
        // Log the exception (you might use a logging framework here)
        return StatusCode(500, "Internal server error");
      }
    }
  }
}
