namespace Core.Application.Contracts.Authentication
{
  public interface ITokenHandler
  {
    public string GenerateToken(string UserName, string passward);
  }
}
