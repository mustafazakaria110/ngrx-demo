using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Features.Users.DeleteUser
{
  public class DeleteUserCommand:IRequest<bool>
  {
    public required long Id { get; set; }
  }
}
