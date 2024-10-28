using Core.Application.Features.DicomNodes;
using Core.Application.Features.Users.GetUsers;
using Core.Domain.Entities;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace APIs.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class DicomNodesController : ControllerBase
  {
    private readonly IMediator _mediator;
    private readonly ILogger<DicomNodesController> _logger;
    public DicomNodesController(IMediator mediator, ILogger<DicomNodesController> logger)
    {
      _mediator = mediator;
      _logger = logger;
    }
    [HttpGet("getdicomnodes")]
    public async Task<ActionResult<List<DicomNode>>> GetDicomNodes()
    {
      try
      {
        var command = new GetDicomNodesCommand();
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
