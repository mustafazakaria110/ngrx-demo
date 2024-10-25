using Core.Application.Contracts.Authentication;
using Infrastructure.Repositories;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Npgsql;
using System.Data;
using System.Data.Common;


namespace Infrastructure
{
  public static class InfrastructureServiceRegistration
  {
    public static IServiceCollection AddInfrasturctureServices(this IServiceCollection services, IConfiguration configuration)
    {

      //  "SERVER": "localhost",
      //"DATABASE": "ngrx-demo",
      //"PORT": "5432",
      //"USER_NAME": "postgres",
      //"PASSWARD": "P@ssw0rd@Lotus"
      string Server = configuration["Database:SERVER"];
      string DatabaseName = configuration["Database:DATABASENAME"];
      string Port = configuration["Database:PORT"];
      string pass = configuration["Database:PASSWARD"];
      string connStr = @$"Host={Server};Port={Port};Database={DatabaseName};Username=postgres;Password={pass};sslmode=prefer;";
      services.AddScoped<IDbConnection>((sp) => new NpgsqlConnection(connStr));

      services.AddScoped<IAuthenticationRepository, AuthenticationRepository>();
      services.AddScoped<ITokenHandler, TokenHandler>();
      return services;

    }


  }
}
