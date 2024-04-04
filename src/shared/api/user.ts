import { AxiosResponse } from 'axios';
import AxiosModule from './axios-module';

export enum UserStatus {
  Pending = 'pending',
  Active = 'active',
}

export interface IUserDto {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
  accountId: string;
  isOwner: boolean;
  isEmailVerified: boolean;
  status: UserStatus;
  avatarUrl?: string;
}

export interface IUpdateUserDto {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  avatarUrl?: string;
}

export interface IUserApi {
  find: () => Promise<AxiosResponse<IUserDto, any>>;
  update: (params: IUpdateUserDto) => Promise<AxiosResponse<IUserDto, any>>,
  delete: () => Promise<AxiosResponse<any, any>>
}

class UserApi extends AxiosModule implements IUserApi {
  constructor() {
    super({ baseURL: '/api' });
  }
  
  public async find(): Promise<AxiosResponse<IUserDto, any>> {
    return await this.axiosInstance.get('/users');
  }

  public async update(params: IUpdateUserDto) {
    return await this.axiosInstance.put('/users', params);
  }

  public async delete(): Promise<AxiosResponse<any, any>> {
    return await this.axiosInstance.delete('/users');
  }
}

export const userApi = new UserApi();
