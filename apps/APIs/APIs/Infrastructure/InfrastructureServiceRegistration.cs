using Core.Application.Contracts.Authentication;
using Core.Application.Contracts.Users;
using Infrastructure.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Npgsql;
using System.Data;


namespace Infrastructure
{
  public static class InfrastructureServiceRegistration
  {
    public static IServiceCollection AddInfrasturctureServices(this IServiceCollection services, IConfiguration configuration)
    {
      string Server = configuration["Database:SERVER"];
      string DatabaseName = configuration["Database:DATABASENAME"];
      string Port = configuration["Database:PORT"];
      string pass = configuration["Database:PASSWARD"];
      string connStr = @$"Host={Server};Port={Port};Database={DatabaseName};Username=postgres;Password={pass};sslmode=prefer;";
      services.AddScoped<IDbConnection>((sp) => new NpgsqlConnection(connStr));

      services.AddScoped<IAuthenticationRepository, AuthenticationRepository>();
      services.AddScoped<IUserQueryRepository, UserQueryRepository>();
      services.AddScoped<IUserCommandsRepository, UserCommandsRepository>();
      services.AddScoped<ITokenHandler, TokenHandler>();
      return services;
    }
  }
}
