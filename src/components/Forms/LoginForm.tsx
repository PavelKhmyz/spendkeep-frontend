import { useState } from 'react';
import { requests } from 'src/api/requests';
import { Input } from 'src/components/Input/Input';
import { validateEmail, validatePassword } from 'src/utils/ValidationUtils';
import './Forms.style.scss';

export interface ILoginErrors {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [emailValue, setEmailValue] = useState<string>('');
  const [passwordValue, setPasswordValue] = useState<string>('');
  const [validationErrors, setValidationErrors] = useState<ILoginErrors>({
    email: '',
    password: '',
  });

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };
  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
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

  const isValidBeforeSubmit = () => {
    const validationErrorsOnSubmit: ILoginErrors = {
      email: validateEmail(emailValue),
      password: validatePassword(passwordValue),
    };

    setValidationErrors(validationErrorsOnSubmit);

    if (
      validationErrorsOnSubmit.email ||
      validationErrorsOnSubmit.password
    ) {
      return false;
    }
    return true;
  };

  const { signIn } = requests();

  const handleSubmitClick = async () => {
    if (!isValidBeforeSubmit) {
      return;
    }

    await signIn({
      email: emailValue,
      password: passwordValue,
    });
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
          label: 'Password',
          placeholder: 'Enter your password',
        }}
        type='password'
        value={passwordValue }
        validationMessage={ validationErrors.password }
        showValueButton
        onChange={ handleChangePassword }
        onBlur={ handleBlurPassword }
      />
      <button
        type='button' 
        onClick={ handleSubmitClick }
        className='submitButton'
        >
          SignIn
      </button>
    </>
  );
};
