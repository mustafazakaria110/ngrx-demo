namespace Core.Contracts
{
  public interface IAuthenticationRepository
  {
    public Task<bool> Authenticate(string username , string passward);
  }
}
