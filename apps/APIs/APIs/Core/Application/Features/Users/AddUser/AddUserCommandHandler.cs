using Core.Application.Contracts.Users;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Features.Users.AddUser
{
  public class AddUserCommandHandler : IRequestHandler<AddUserCommand, bool>
  {
    private readonly IUserCommandsRepository userCommandsRepository;
    public AddUserCommandHandler(IUserCommandsRepository userCommandsRepository)
    {
      this.userCommandsRepository = userCommandsRepository;
    }
    public async Task<bool> Handle(AddUserCommand request, CancellationToken cancellationToken)
    {
      request.User.Created = DateTime.UtcNow;
      await this.userCommandsRepository.AddUser(request.User);
      return true;
    }
  }
}
