using Core.Application.Features.Authentication.Login;
using Core.Application.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace APIs.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class AuthenticationController : ControllerBase
  {
    private readonly IMediator _mediator;
    private readonly ILogger<AuthenticationController> _logger;
    public AuthenticationController(IMediator mediator, ILogger<AuthenticationController> logger)
    {
      this._mediator = mediator;
      this._logger = logger;
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
        return Ok(AuthenticationUserModel);
      }
      catch (Exception ex)
      {
        this._logger.LogError(ex.Message);
        return StatusCode(500, "Internal server error");
      }
    }
  }
}
