using Core.Application.Features.Authentication.Login;
using Core.Application.Models;
using Core.Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Contracts.Authentication
{
  public interface IAuthenticationRepository
  {
    public Task<AuthenticationUserModel?> GetAuthenticatedUser(string userName, string passs);
  }
}
