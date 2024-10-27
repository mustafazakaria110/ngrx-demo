using Core.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Features.Users.AddUser
{
  public class AddUserCommand : IRequest<bool>
  {
    public required User User { get; set; }
  }
}
