using Core.Application.Features.Users.AddUser;
using Core.Application.Features.Users.DeleteUser;
using Core.Application.Features.Users.GetUserById;
using Core.Application.Features.Users.GetUsers;
using Core.Application.Features.Users.UpdateUser;
using Core.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace APIs.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  [Authorize]
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
        return Ok(await _mediator.Send(command));
      }
      catch (Exception ex)
      {
        this._logger.LogError(ex.Message);
        return StatusCode(500, "Internal server error");
      }
    }
    [HttpGet("getbyid/{id}")]
    public async Task<ActionResult<User>> GetById(long id)
    {
      try
      {
        var command = new GetUserByIdCommand()
        {
          Id = id
        };
        return (id > 0) ? Ok(await _mediator.Send(command)) : Ok(new ActionResult<User>(new Core.Domain.Entities.User()));
      }
      catch (Exception ex)
      {
        this._logger.LogError(ex.Message);
        return StatusCode(500, "Internal server error");
      }
    }
    [HttpPost("update")]
    public async Task<ActionResult<bool>> UpdateUSser([FromBody] User user)
    {
      try
      {
        var command = new UpdateUserCommand()
        {
          User = user
        };

        return Ok(await _mediator.Send(command));

      }
      catch (Exception ex)
      {
        this._logger.LogError(ex.Message);
        return StatusCode(500, "Internal server error");
      }
    }

    [HttpPost("add")]
    public async Task<ActionResult<bool>> AddUsser([FromBody] User user)
    {
      try
      {
        user.Created = DateTime.UtcNow;
        var command = new AddUserCommand()
        {
          User = user
        };

        return Ok(await _mediator.Send(command));

      }
      catch (Exception ex)
      {
        this._logger.LogError(ex.Message);
        return StatusCode(500, "Internal server error");
      }
    }
    [HttpDelete("delete/{id}")]
    public async Task<ActionResult<bool>> DeleteUsser(long id)
    {
      try
      {
        var command = new DeleteUserCommand()
        {
          Id = id
        };

        return Ok(await _mediator.Send(command));
      }
      catch (Exception ex)
      {
        this._logger.LogError(ex.Message);
        return StatusCode(500, "Internal server error");
      }
    }

  }
}
