import { useState } from 'react';
import { Input } from 'src/shared/ui';
import { validateEmail, validatePassword, validateConfirmPassword, validateName, useAppDispatch } from 'src/shared/lib';
import { userRegistration } from 'src/features/auth-by-email/auth.slice';

interface IRegistrationErrors {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  passwordConfirm: string;
}

export const RegistrationForm = () => {
  const dispatch = useAppDispatch();
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [firstNameValue, setFirstNameValue] = useState<string>('');
  const [lastNameValue, setLastNameValue] = useState<string>('');
  const [passwordConfirmValue, setPasswordConfirmValue] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<IRegistrationErrors>({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    passwordConfirm: '',
  });

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };
  const handleChangePasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordConfirmValue(event.target.value);
  };
  const handleChangeFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstNameValue(event.target.value);
  };
  const handleChangeLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastNameValue(event.target.value);
  };

  const handleBlurEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const emailError = validateEmail(event.target.value);
    setValidationErrors((previousValue) => ({ 
      ...previousValue, email: emailError,
    }));
  };
  const handleBlurPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordError = validatePassword(event.target.value);
    setValidationErrors((previousValue) => ({ 
      ...previousValue, password: passwordError,
    }));
  };
  const handleBlurPasswordConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    const passwordConfirmError = validateConfirmPassword(passwordValue, event.target.value);
    setValidationErrors((previousValue) => ({ 
      ...previousValue, passwordConfirm: passwordConfirmError,
    }));
  };
  const handleBlurFirstName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const firstNameError = validateName(event.target.value);
    setValidationErrors((previousValue) => ({ 
      ...previousValue, firstName: firstNameError,
    }));
  };
  const handleBlurLastName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const lastNameError = validateName(event.target.value);
    setValidationErrors((previousValue) => ({ 
      ...previousValue, lastName: lastNameError,
    }));
  };

  const isValidBeforeSubmit = () => {
    const validationErrorsOnSubmit: IRegistrationErrors = {
      email: validateEmail(emailValue),
      firstName: validateName(firstNameValue),
      lastName: validateName(lastNameValue),
      password: validatePassword(passwordValue),
      passwordConfirm: validateConfirmPassword(passwordValue, passwordConfirmValue),
    };

    setValidationErrors(validationErrorsOnSubmit);

    if (
      validationErrorsOnSubmit.email ||
      validationErrorsOnSubmit.firstName ||
      validationErrorsOnSubmit.lastName ||
      validationErrorsOnSubmit.password ||
      validationErrorsOnSubmit.passwordConfirm
    ) {
      return false;
    }
    return true;
  };

  const handleSubmitClick = async () => {
    if (!isValidBeforeSubmit) {
      return;
    }

    await dispatch(userRegistration({
      email: emailValue,
      firstName: firstNameValue,
      lastName: lastNameValue,
      password: passwordValue,
    }));
  };

  return (
    <>
      <Input
        props={{
          label: 'Email',
          placeholder: 'Enter your email',
        }}
        type='text'
        value={ emailValue }
        validationMessage={ validationErrors.email }
        onChange={ handleChangeEmail }
        onBlur={ handleBlurEmail }
      />
      <Input
        props={{
          label: 'Name',
          placeholder: 'Enter your name',
        }}
        type='text'
        value={ firstNameValue }
        validationMessage={ validationErrors.firstName }
        onChange={ handleChangeFirstName }
        onBlur={ handleBlurFirstName }
      />
      <Input
        props={{
          label: 'Last name',
          placeholder: 'Enter your last name',
        }}
        type='text'
        value={ lastNameValue }
        validationMessage={ validationErrors.lastName }
        onChange={ handleChangeLastName }
        onBlur={ handleBlurLastName }
      />
      <Input
        props={{
          label: 'Password',
          placeholder: 'Enter your password',
        }}
        type='password'
        value={ passwordValue }
        validationMessage={ validationErrors.password }
        showValueButton
        onChange={ handleChangePassword }
        onBlur={ handleBlurPassword }
      />
      <Input
        props={{
          label: 'Password confirm',
          placeholder: 'Confirm your password',
        }}
        type='password'
        value={ passwordConfirmValue }
        validationMessage={ validationErrors.passwordConfirm }
        showValueButton
        onChange={ handleChangePasswordConfirm }
        onBlur={ handleBlurPasswordConfirm }
      />
      <button
        type='button' 
        onClick={ handleSubmitClick }
        className='submitButton'
      >
          SignUp
      </button>
    </>
  );
};
