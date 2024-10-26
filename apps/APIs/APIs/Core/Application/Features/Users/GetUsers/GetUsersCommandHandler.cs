using Core.Application.Contracts.Users;
using Core.Domain.Entities;
using MediatR;

namespace Core.Application.Features.Users.GetUsers
{
  public class GetUsersCommandHandler : IRequestHandler<GetUsersCommand, List<User>>
  {
    private readonly IUserQueryRepository userQueryRepository;

    public GetUsersCommandHandler(IUserQueryRepository userQueryRepository)
    {
      this.userQueryRepository = userQueryRepository;
    }
    public Task<List<User>> Handle(GetUsersCommand request, CancellationToken cancellationToken)
    {
      return this.userQueryRepository.GetUsers();
    }
  }
}
