import { AxiosResponse } from 'axios';
import BaseApiConfiguration from 'src/shared/api/base-api-configuration';
import { base64ToObject } from 'src/shared/lib';
import { UserStatus } from 'src/shared/api/user';

export interface LoginDto {
  email: string;
  password: string;
}

interface ResponseUserHeader {
  accountId: string,
  status: UserStatus,
  isEmailVerified: boolean,
}

export interface IAuthorizationApi {
  login: (params: LoginDto) => Promise<ResponseUserHeader>;
  logout: () => Promise<AxiosResponse<any, any>>;
}

class AuthorizationApi extends BaseApiConfiguration implements IAuthorizationApi {
  public async login(params: LoginDto): Promise<ResponseUserHeader> {
    const response = await this.webApi.post('/session', params);

    return base64ToObject<ResponseUserHeader>(response.headers['x-spendkeep-user']);
  }

  public async logout(): Promise<AxiosResponse<any, any>> {
    return await this.webApi.delete('/session');
  }
}

export const authorizationApi = new AuthorizationApi();
