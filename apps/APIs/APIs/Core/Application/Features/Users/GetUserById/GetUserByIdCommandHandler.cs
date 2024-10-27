using Core.Application.Contracts.Users;
using Core.Application.Features.Users.GetUsers;
using Core.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Features.Users.GetUserById
{
  public class GetUserByIdCommandHandler : IRequestHandler<GetUserByIdCommand, User>
  {
    private readonly IUserQueryRepository userQueryRepository;

    public GetUserByIdCommandHandler(IUserQueryRepository userQueryRepository)
    {
        this.userQueryRepository = userQueryRepository;
    }
    public async Task<User> Handle(GetUserByIdCommand request, CancellationToken cancellationToken)
    {
      if (request.Id > 0)
      {
        return await userQueryRepository.GetById(request.Id);
      }
      else return new User();
    }
  }
}
