using Core.Domain.Entities;

namespace Core.Application.Contracts.Users
{
  public interface IUserQueryRepository
  {
    public Task<List<User>> GetUsers();
  }
}
