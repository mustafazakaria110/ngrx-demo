using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Entities
{
  public class User
  {
    public long Id { get; set; }
    public string UserName { get; set; } = string.Empty;
    public string FullName { get; set; } = string.Empty;
    public string Email { get; set; } = string.Empty;
    public int UserRole { get; set; }
    public string? imageURL { get; set; }
    public string? PacsUserName { get; set; }
    public string? RisUserId { get; set; }
  }
}
