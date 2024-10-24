using AutoMapper;
using Core.Application.Models;
using Core.Domain.Entities;

namespace Core.Application.Profiles
{
  public class MappingProfile : Profile
  {
    public MappingProfile()
    {
      CreateMap<User, AuthenticationUserModel>();

    }
  }
}
