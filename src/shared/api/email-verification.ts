import { AxiosResponse } from 'axios';
import AxiosModule from './axios-module';

export interface ISendVerificationCodeDto {
  email: string;
  userName: string;
}

export interface IVerifyEmailDto {
  verificationCode: string;
}

export interface IEmailVerificationApi {
  sendVerificationEmail: (params: ISendVerificationCodeDto) => Promise<AxiosResponse<any, any>>;
  verifyEmail: (params: IVerifyEmailDto) => Promise<AxiosResponse<any, any>>;
}

export default class EmailVerificationApi extends AxiosModule implements IEmailVerificationApi {
  constructor() {
    super({ baseURL: '/api' });
  }
  
  public async sendVerificationEmail(params: ISendVerificationCodeDto): Promise<AxiosResponse<any, any>> {
    return await this.axiosInstance.post('/email-verification', params);
  }

  public async verifyEmail(params: IVerifyEmailDto): Promise<AxiosResponse<any, any>> {
    return await this.axiosInstance.post('/email-verification/verify', params);
  }
}
