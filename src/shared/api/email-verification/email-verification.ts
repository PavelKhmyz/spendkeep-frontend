import { AxiosResponse } from 'axios';
import baseApiConfiguration from 'src/shared/api/base-api-configuration';

export interface SendVerificationCodeDto {
  email: string;
  userName: string;
}

export interface VerifyEmailDto {
  verificationCode: string;
}

export interface IEmailVerificationApi {
  sendVerificationEmail: (params: SendVerificationCodeDto) => Promise<AxiosResponse<any, any>>;
  verifyEmail: (params: VerifyEmailDto) => Promise<AxiosResponse<any, any>>;
}

export default class EmailVerificationApi extends baseApiConfiguration implements IEmailVerificationApi {
  public async sendVerificationEmail(params: SendVerificationCodeDto): Promise<AxiosResponse<any, any>> {
    return await this.webApi.post('/email-verification', params);
  }

  public async verifyEmail(params: VerifyEmailDto): Promise<AxiosResponse<any, any>> {
    return await this.webApi.post('/email-verification/verify', params);
  }
}
