using Core.Contracts;
using Dapper;
using System.Data;

namespace Infrastrucure.Repositories
{
  public class AuthenticationRepository : IAuthenticationRepository
  {
    private IDbConnection _connection;
    public AuthenticationRepository(IDbConnection dbConnection)
    {
        this._connection = dbConnection;
    }
    public async Task<bool> Authenticate(string username, string passward)
    {
      using (this._connection)
      {
        string sql = "select * from users where username ilike @username and password = @passward";
        var user = this._connection.QueryFirstOrDefault(sql, new { username, passward });
        return user == null ? false : true;
      }
    }
  }
}
