using Core.Application.Contracts.Users;
using Core.Application.Features.Users.GetUsers;
using Core.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Features.Users.UpdateUser
{
  public class UpdateUserCommandHandler : IRequestHandler<UpdateUserCommand, bool>
  {
    private readonly IUserCommandsRepository userCommandsRepository;
    public UpdateUserCommandHandler(IUserCommandsRepository userCommandsRepository)
    {
        this.userCommandsRepository = userCommandsRepository;
    }
    public async Task<bool> Handle(UpdateUserCommand request, CancellationToken cancellationToken)
    {
      await this.userCommandsRepository.EditUser(request.User);
      return true;
    }
  }
}
