using Core.Application.Features.Users.GetUsers;
using Core.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace APIs.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class UsersController : ControllerBase
  {
    private readonly IMediator _mediator;
    private readonly ILogger<UsersController> _logger;
    public UsersController(IMediator mediator, ILogger<UsersController> logger)
    {
      this._mediator = mediator;
      this._logger = logger;
    }
    [HttpGet("getusers")]
    public async Task<ActionResult<List<User>>> GetUsers()
    {
      try
      {
        var command = new GetUsersCommand();
        List<User> Users = await _mediator.Send(command);
        return Ok(Users);
      }
      catch (Exception ex)
      {
        this._logger.LogError(ex.Message);
        return StatusCode(500, "Internal server error");
      }
    }

  }
}
