using Core.Contracts;
using Infrastrucure.Repositories;
using Microsoft.Extensions.Configuration;
using System.Data.Common;
using System.Data;
using Npgsql;

namespace Infrastrucure
{
  public static class ServiceRegistration
  {
    public static IServiceCollection AddAuthenticationServices(this IServiceCollection services, IConfiguration configuration)
    {
      
      string connStr = "Host=localhost;Port=5432;Database=ngrx-demo;Username=postgres;Password=P@ssw0rd@Lotus";
      services.AddScoped<IDbConnection>((sp) => new NpgsqlConnection(connStr));

      services.AddScoped<IAuthenticationRepository, AuthenticationRepository>();
      return services;
    }

  }
}
