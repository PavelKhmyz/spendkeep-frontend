import { AxiosResponse } from 'axios';
import { IUserDto } from 'src/shared/api/user';
import AxiosModule from './axios-module';

export interface IRegistrationDto {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  avatarUrl?: string;
}

export interface IRegistrationApi {
  registration: (params: IRegistrationDto) => Promise<AxiosResponse<IUserDto, any>>;
}

class RegistrationApi extends AxiosModule implements IRegistrationApi {
  constructor() {
    super({ baseURL: '/api' });
  }
  
  public async registration (params: IRegistrationDto): Promise<AxiosResponse<IUserDto, any>> {
    return await this.axiosInstance.post<IUserDto>('/accounts', params);
  }
}

export const registrationApi = new RegistrationApi();
