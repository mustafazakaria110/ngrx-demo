using Core.Application.Contracts.Authentication;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure
{
  public class TokenHandler : ITokenHandler
  {
    private IConfiguration configuration;
    public TokenHandler(IConfiguration _configuration)
    {
      this.configuration = _configuration;
    }
    public string GenerateToken(string UserName, string passward)
    {
      string secretKey = configuration["tokenManagement:secret"];
      string audience = configuration["tokenManagement:audience"];
      string issuer = configuration["tokenManagement:issuer"];
      string accessExpiration = configuration["tokenManagement:accessExpiration"];

      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(secretKey));
      var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

      //// Define the claims
      var claims = new[]
      {
          new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
          new Claim(ClaimTypes.Name, UserName)
      };

      //// Create the JWT token
      var token = new JwtSecurityToken(
          issuer: issuer,
          audience: audience,
          claims: claims,
          expires: DateTime.Now.AddMinutes(int.Parse(accessExpiration)),
          signingCredentials: credentials
      );

      // Return the token as a string
      return new JwtSecurityTokenHandler().WriteToken(token);
    }
  }
}
