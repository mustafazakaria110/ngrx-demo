using Core.Application.Contracts.DicomNodes;
using Core.Domain.Entities;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Infrastructure.Repositories
{
  public class DicomNodesQueryRepository : IDicomNodesQuery
  {
    private readonly IDbConnection dbConnection;

    public DicomNodesQueryRepository(IDbConnection connection)
    {
      dbConnection = connection;
    }

    public async Task<List<DicomNode>> Get()
    {
      if (this.dbConnection.State != ConnectionState.Open)
        dbConnection.Open();
      string SQL = @$"SELECT * from dicomnodes";
      return (await this.dbConnection.QueryAsync<DicomNode>(SQL)).ToList();
    }
  }
}
