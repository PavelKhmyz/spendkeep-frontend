import axios, { AxiosResponse } from 'axios';

export interface ISignUpParams {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  avatarUrl?: string;
}

export interface ISignInParams {
  email: string;
  password: string;
}

export interface IVerifyEmailParams {
  verificationCode: string;
}

export interface IRequests {
  signUp: (params: ISignUpParams) => Promise<AxiosResponse<any, any>>;
  signIn: (params: ISignInParams) => Promise<AxiosResponse<any, any>>;
  logout: () => Promise<AxiosResponse<any, any>>;
  sendVerificationEmail: () => Promise<AxiosResponse<any, any>>;
  verifyEmail: (params: IVerifyEmailParams) => Promise<AxiosResponse<any, any>>;
}

export const requests = (): IRequests => {
  const backendApi = axios.create();

  return {
    signUp: (params: ISignUpParams) => backendApi.post('/signUp', params),
    signIn: (params: ISignInParams) => backendApi.post('/session', params),
    logout: () => backendApi.delete('/session'),
    sendVerificationEmail: () => backendApi.post('/emailVerification'),
    verifyEmail: (params: IVerifyEmailParams) => backendApi.post('/emailVerification/verify', params),
  };
};
