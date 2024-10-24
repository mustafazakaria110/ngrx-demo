using Core.Contracts;
using MediatR;

namespace Core.Features.Authentication.Login
{
  public class LoginCommandHandler : IRequestHandler<LoginCommand>
  {
    private readonly ILogger<LoginCommandHandler> _logger;
    private readonly IAuthenticationRepository _authenticationRepository;
    public LoginCommandHandler(IAuthenticationRepository authenticationRepository, ILogger<LoginCommandHandler> logger)
    {
        _authenticationRepository = authenticationRepository;
        _logger = logger;
    }
    public async Task Handle(LoginCommand request, CancellationToken cancellationToken)
    {
      bool authenticated = await this._authenticationRepository.Authenticate(request.UserName, request.Passward);
      
      if (authenticated)
      {
        return;
      }
      else
      {
        throw new UnauthorizedAccessException();
      }

    }
  }
}
