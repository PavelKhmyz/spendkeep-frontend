export const VALIDATION_ERRORS = {
  EMAIL: 'Email is invalid',
  NAME: 'This field cannot be empty',
  PASSWORD: 'Password must at least 6 symbols with numbers and special characters',
  CONFIRM_PASSWORD: 'Passwords must be the same',
};

export const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

export const passwordRegex = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?*/ "]).*$/g;
