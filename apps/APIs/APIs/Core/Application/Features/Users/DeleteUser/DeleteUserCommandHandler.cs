using Core.Application.Contracts.Users;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Features.Users.DeleteUser
{
  public class DeleteUserCommandHandler : IRequestHandler<DeleteUserCommand, bool>
  {
    private readonly IUserCommandsRepository userCommandsRepository;
    public DeleteUserCommandHandler(IUserCommandsRepository userCommandsRepository)
    {
      this.userCommandsRepository = userCommandsRepository;
    }
    public async Task<bool> Handle(DeleteUserCommand request, CancellationToken cancellationToken)
    {
      await userCommandsRepository.DeleteUser(request.Id);
      return true;
    }
  }
}
