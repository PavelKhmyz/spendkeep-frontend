import EmailVerificationApi, { IEmailVerificationApi } from './email-verification';

export * from './email-verification';

export const emailVerificationApi: IEmailVerificationApi = new EmailVerificationApi;
