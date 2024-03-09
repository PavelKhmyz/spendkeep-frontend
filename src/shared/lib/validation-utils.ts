import { VALIDATION_ERRORS, emailRegex, passwordRegex } from 'src/shared/constants/ValidationConstants';

export const validatePassword = (password: string) => {
  if (password.match(passwordRegex)) {
    return '';
  }
  return VALIDATION_ERRORS.PASSWORD;
};

export const validateName = (name: string) => {
  if (name) {
    return '';
  }
  return VALIDATION_ERRORS.NAME;
};


export const validateEmail = (email: string) => {
  if (email.match(emailRegex)) {
    return '';
  }
  return VALIDATION_ERRORS.EMAIL;
};

export const validateConfirmPassword = (password: string, confirmPassword: string) => {
  if (password === confirmPassword) {
    return '';
  }
  return VALIDATION_ERRORS.CONFIRM_PASSWORD;
};
