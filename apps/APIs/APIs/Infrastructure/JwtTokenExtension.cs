using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace Infrastructure
{
  public static class JwtTokenExtension
  {
    public static void AddJwtTokenManagement(this IServiceCollection services, IConfiguration configuration)
    {
      string secretKey = configuration["tokenManagement:secret"];
      string audience = configuration["tokenManagement:audience"];
      string issuer = configuration["tokenManagement:issuer"];

      var secret = Encoding.ASCII.GetBytes(secretKey);
      services.AddAuthentication(x =>
      {
        x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
        x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
      }).AddJwtBearer(x =>
      {
        x.RequireHttpsMetadata = false;
        x.SaveToken = true;
        x.TokenValidationParameters = new TokenValidationParameters
        {
          ValidateIssuerSigningKey = true,
          IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(secretKey)),
          ValidIssuer = issuer,
          ValidAudience = audience,
          ValidateIssuer = false,
          ValidateAudience = false,
          ValidateLifetime = true,
          RequireExpirationTime = true,
          ClockSkew = TimeSpan.Zero
        };
        x.Events = new JwtBearerEvents
        {
          OnAuthenticationFailed = context =>
          {
            if (context.Exception.GetType() == typeof(SecurityTokenExpiredException))
            {
              context.Response.Headers.Append("Token-Expired", "true");
            }
            return Task.CompletedTask;
          }
        };
      });
    }
  }
}
