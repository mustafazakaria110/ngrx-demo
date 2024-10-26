using Core.Domain.Entities;
using MediatR;

namespace Core.Application.Features.Users.GetUsers
{
  public class GetUsersCommand : IRequest<List<User>>
  {
  }
}
