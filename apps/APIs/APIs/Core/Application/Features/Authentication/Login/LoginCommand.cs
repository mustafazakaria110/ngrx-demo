using Core.Application.Models;
using Core.Domain;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Features.Authentication.Login
{
  public class LoginCommand : IRequest<AuthenticationUserModel?>
  {
    public string UserName { get; set; } = string.Empty;
    public string Passward { get; set; } = string.Empty;
  }
}
