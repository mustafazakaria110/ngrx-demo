using Core.Application.Contracts.DicomNodes;
using Core.Application.Features.Users.GetUsers;
using Core.Domain.Entities;
using MediatR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Core.Application.Features.DicomNodes
{
  public class GetDicomNodesCommandHandler : IRequestHandler<GetDicomNodesCommand, List<DicomNode>>
  {
    private readonly IDicomNodesQuery dicomNodesQuery;
    public GetDicomNodesCommandHandler(IDicomNodesQuery dicomNodesQuery)
    {
      this.dicomNodesQuery = dicomNodesQuery;
    }
    public async Task<List<DicomNode>> Handle(GetDicomNodesCommand request, CancellationToken cancellationToken)
    {
      return await this.dicomNodesQuery.Get();
    }
  }
}
