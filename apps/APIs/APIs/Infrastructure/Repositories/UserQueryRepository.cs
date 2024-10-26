using AutoMapper;
using Core.Application.Contracts.Users;
using Core.Domain.Entities;
using Dapper;
using System.Data;

namespace Infrastructure.Repositories
{
  public class UserQueryRepository : IUserQueryRepository
  {
    private IDbConnection _connection;
    private readonly IMapper _mapper;
    public UserQueryRepository(IDbConnection dbConnection, IMapper mapper)
    {
      this._connection = dbConnection;
      this._mapper = mapper;
    }

    public async Task<List<User>> GetUsers()
    {
      using (this._connection)
      {
        string sql = "select * from users";
        return (await this._connection.QueryAsync<User>(sql)).ToList();
      }
    }
  }
}
