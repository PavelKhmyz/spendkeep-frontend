import { AxiosResponse } from 'axios';
import { base64ToObject } from 'src/shared/lib';
import AxiosModule from './axios-module';
import { UserStatus } from './user';

export interface ILoginDto {
  email: string;
  password: string;
}

interface IResponseUserHeader {
  accountId: string,
  status: UserStatus,
  isEmailVerified: boolean,
}

export interface IAuthorizationApi {
  login: (params: ILoginDto) => Promise<IResponseUserHeader>;
  logout: () => Promise<AxiosResponse<any, any>>;
}

class AuthorizationApi extends AxiosModule implements IAuthorizationApi {
  constructor() {
    super({ baseURL: '/api' });
  }
  
  public async login(params: ILoginDto): Promise<IResponseUserHeader> {
    const response = await this.axiosInstance.post('/session', params);

    return base64ToObject<IResponseUserHeader>(response.headers['x-spendkeep-user']);
  }

  public async logout(): Promise<AxiosResponse<any, any>> {
    return await this.axiosInstance.delete('/session');
  }
}

export const authorizationApi = new AuthorizationApi();
