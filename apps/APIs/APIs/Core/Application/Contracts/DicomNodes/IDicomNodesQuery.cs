using Core.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Contracts.DicomNodes
{
  public interface IDicomNodesQuery
  {
    Task<List<DicomNode>> Get();
  }
}
