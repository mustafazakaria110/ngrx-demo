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
    public string UserName { get; set; }
    public string FullName { get; set; }
    public int UserRole { get; set; }


  }
}
