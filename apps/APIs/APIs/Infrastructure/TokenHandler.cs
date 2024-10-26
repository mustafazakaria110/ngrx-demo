using Core.Application.Contracts.Authentication;
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
    private const string SecretKey = "bXlTZWNyZXRrZXlTdXBlclNlY3JldEtleVN1cGVyU2VjcmV0"; // Make sure to replace this with a secure key
    private const string Issuer = "your-issuer";
    private const string Audience = "your-audience";
    public string GenerateToken(string UserName, string passward)
    {
      var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(SecretKey));
      var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

      //// Define the claims
      var claims = new[]
      {
          new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
          new Claim(ClaimTypes.Name, UserName)
      };

      //// Create the JWT token
      var token = new JwtSecurityToken(
          issuer: Issuer,
          audience: Audience,
          claims: claims,
          expires: DateTime.UtcNow.AddMinutes(30),
          signingCredentials: credentials
      );

      // Return the token as a string
      return new JwtSecurityTokenHandler().WriteToken(token);
    }
  }
}
