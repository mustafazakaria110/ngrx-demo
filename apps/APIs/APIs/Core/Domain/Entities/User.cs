using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Entities
{
  [Table("users")]
  public class User
  {
    [Key]
    [Column("id", TypeName = "bigint")]
    public long Id { get; set; }
    [Column("username", TypeName = "character varying")]
    public string UserName { get; set; } = string.Empty;
    [Column("password", TypeName = "character varying")]
    public string Password { get; set; } = string.Empty;
    [Column("fullname", TypeName = "character varying")]
    public string FullName { get; set; } = string.Empty;
    [Column("email", TypeName = "character varying")]
    public string Email { get; set; } = string.Empty;
    [Column("userRole", TypeName = "int")]
    public int UserRole { get; set; }
    [Column("imageurl", TypeName = "character varying")]
    public string? ImageUrl { get; set; }
    [Column("pacsusername", TypeName = "character varying")]
    public string? PacsUserName { get; set; }
    [Column("risuserid", TypeName = "character varying")]
    public string? RisUserId { get; set; }
    [Column("institutionid", TypeName = "bigint")]
    public long? InstitutionId { get; set; }
    [Column("isactive", TypeName = "boolean")]
    public bool IsActive { get; set; }
    
  }
}
