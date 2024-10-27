using Core.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Features.Users.UpdateUser
{
  public class UpdateUserCommand : IRequest<bool>
  {
    public required User User { get; set; }
  }
}
