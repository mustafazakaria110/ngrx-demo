using Core.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Features.DicomNodes
{
  public class GetDicomNodesCommand : IRequest<List<DicomNode>>
  {
  }
}
