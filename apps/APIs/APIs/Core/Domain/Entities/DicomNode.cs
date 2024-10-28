using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Domain.Entities
{
  [Table("dicomnodes")]
  public class DicomNode
  {
    [Key]
    [Column("id", TypeName = "bigint")]
    public long ID { get; set; }

    [Column("name", TypeName = "character varying")]
    public string Name { get; set; }

    [Column("ip", TypeName = "character varying")]
    public string IP { get; set; }

    [Column("aetitle", TypeName = "character varying")]
    public string AETitle { get; set; }

    [Column("port", TypeName = "integer")]
    public int Port { get; set; }


  }
}
