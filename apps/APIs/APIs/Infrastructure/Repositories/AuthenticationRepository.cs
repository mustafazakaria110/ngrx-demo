using AutoMapper;
using Core.Application.Contracts.Authentication;
using Core.Application.Features.Authentication.Login;
using Core.Application.Models;
using Core.Domain.Entities;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
  public class AuthenticationRepository : IAuthenticationRepository
  {
    private IDbConnection _connection;
    private readonly IMapper _mapper; 

    public AuthenticationRepository(IDbConnection dbConnection , IMapper mapper)
    {
      this._connection = dbConnection;
      this._mapper = mapper;
    }
    public async Task<AuthenticationUserModel?> GetAuthenticatedUser(string userName, string passward)
    {
      using (this._connection)
      {
        string sql = "select * from users where username ilike @username and password = @passward";
        var user = this._connection.QueryFirstOrDefault<User>(sql, new { userName, passward });
        return _mapper.Map<AuthenticationUserModel>(user);
      }
    }
  }
}
