using Core.Application.Models;
using MediatR;

namespace Core.Application.Features.Authentication.Login
{
  public class LoginCommand : IRequest<AuthenticationUserModel?>
  {
    public string UserName { get; set; } = string.Empty;
    public string Passward { get; set; } = string.Empty;
  }
}
