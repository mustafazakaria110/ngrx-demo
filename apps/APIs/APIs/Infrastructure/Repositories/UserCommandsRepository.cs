using Core.Application.Contracts.Users;
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
  public class UserCommandsRepository : IUserCommandsRepository
  {
    private readonly IDbConnection _connection;
    public UserCommandsRepository(IDbConnection _connection)
    {
      this._connection = _connection;
        
    }
    public async Task AddUser(User user)
    {
      using (this._connection)
      {
        user.Created = DateTime.UtcNow;
        string sql = @$"INSERT INTO public.users(
	      username, password, fullname, userrole, imageurl, pacsusername, risuserid, institutionid, isactive,created)
	      VALUES (@username, 
			      @password, 
			      @fullname,
			      @userrole,
			      @imageurl,
	          @pacsusername,
	          @risuserid,
	          @institutionid,
	          @isactive,
            @created);";
        await this._connection.ExecuteAsync(sql,user);
      }
    }

    public async Task DeleteUser(long userid)
    {
      using (this._connection)
      {
        string sql = @$"Delete FROM users where id = @userid;";
        await this._connection.ExecuteAsync(sql, new { userid });
      }
    }

    public async Task EditUser(User user)
    {
      using (this._connection)
      {
        string sql = @$"UPDATE users
	          SET username=@username,
	          fullname=@fullname,
            email = @email,
	          userrole=@userrole,
	          imageurl=@imageurl,
	          pacsusername=@pacsusername,
	          risuserid=@risuserid,
	          institutionid=@institutionid,
	          isactive=@isactive
	          WHERE id=@id;";
        try
        {

          await _connection.ExecuteAsync(sql, user);
        }
        catch (Exception ex) {
        }
      }
    }
  }
}
