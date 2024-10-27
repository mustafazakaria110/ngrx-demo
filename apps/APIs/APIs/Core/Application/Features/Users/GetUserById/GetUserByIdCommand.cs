using Core.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Features.Users.GetUserById
{
  public class GetUserByIdCommand :IRequest<User>
  {
    public long Id { get; set; }
  }
}
