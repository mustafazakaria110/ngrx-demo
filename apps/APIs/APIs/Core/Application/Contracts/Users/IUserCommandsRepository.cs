using Core.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Contracts.Users
{
  public interface IUserCommandsRepository
  {
    Task AddUser(User user);
    Task EditUser(User user);
    Task DeleteUser(long userid);

  }
}
