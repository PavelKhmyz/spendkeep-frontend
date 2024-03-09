import { AxiosResponse } from 'axios';
import BaseApiConfiguration from 'src/shared/api/base-api-configuration';

export enum UserStatus {
  Pending = 'pending',
  Active = 'active',
};

export interface UserDto {
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

export interface UpdateUserDto {
  email?: string;
  firstName?: string;
  lastName?: string;
  password?: string;
  avatarUrl?: string;
}

export interface IUserApi {
  find: () => Promise<AxiosResponse<UserDto, any>>;
  update: (params: UpdateUserDto) => Promise<AxiosResponse<UserDto, any>>,
  delete: () => Promise<AxiosResponse<any, any>>
}

class UserApi extends BaseApiConfiguration implements IUserApi {
  public async find(): Promise<AxiosResponse<UserDto, any>> {
    return await this.webApi.get('/users');
  }

  public async update(params: UpdateUserDto) {
    return await this.webApi.put('/users', params);
  }

  public async delete(): Promise<AxiosResponse<any, any>> {
    return await this.webApi.delete('/users');
  }
}

export const userApi = new UserApi();
