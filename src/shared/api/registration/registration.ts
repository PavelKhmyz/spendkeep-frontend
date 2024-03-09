import { AxiosResponse } from 'axios';
import BaseApiConfiguration from 'src/shared/api/base-api-configuration';
import { UserDto } from 'src/shared/api/user';

export interface RegistrationDto {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  avatarUrl?: string;
};

export interface IRegistrationApi {
  registration: (params: RegistrationDto) => Promise<AxiosResponse<UserDto, any>>;
}

class RegistrationApi extends BaseApiConfiguration implements IRegistrationApi {
  public async registration (params: RegistrationDto): Promise<AxiosResponse<UserDto, any>> {
    return await this.webApi.post<UserDto>('/accounts', params);
  }
}

export const registrationApi = new RegistrationApi();
