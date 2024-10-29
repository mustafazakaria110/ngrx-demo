using Core.Domain.Entities;
using MediatR;


namespace Core.Application.Features.Users.AddUser
{
  public class AddUserCommand : IRequest<bool>
  {
    public required User User { get; set; }
  }
}
