using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Models
{
  public class AuthenticationUserModel
  {
    public long Id { get; set; }
    public int UserRole { get; set; }
    public string UserName { get; set; } = string.Empty;
    public string? UserToken { get; set; } = string.Empty;
  }
}
