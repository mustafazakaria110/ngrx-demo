using Core.Application.Contracts.Authentication;
using Core.Application.Models;
using Core.Domain;
using MediatR;


namespace Core.Application.Features.Authentication.Login
{

  public class LoginCommandHandler : IRequestHandler<LoginCommand, AuthenticationUserModel>
  {
    private readonly IAuthenticationRepository authenticationRepository;
    public LoginCommandHandler(IAuthenticationRepository authenticationRepository)
    {
      this.authenticationRepository = authenticationRepository;
    }
    public async Task<AuthenticationUserModel> Handle(LoginCommand request, CancellationToken cancellationToken)
    {
      var authenticatedUser = await authenticationRepository.GetAuthenticatedUser(request.UserName,request.Passward);
      return authenticatedUser ?? throw new Exception("Not Authenticated");
    }

  }
}
