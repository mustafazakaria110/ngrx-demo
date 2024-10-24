using MediatR;
namespace Core.Features.Authentication.Login
{
  public class LoginCommand : IRequest
  {
    public string UserName { get; set; } = string.Empty;
    public string Passward { get; set; } = string.Empty;
  }
}
