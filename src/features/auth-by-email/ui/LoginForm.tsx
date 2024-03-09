import { useState } from 'react';
import { Input } from 'src/shared/ui';
import { useAppDispatch, validateEmail, validatePassword } from 'src/shared/lib';
import { userLogin } from 'src/features/auth-by-email/model/auth-slice';

export interface ILoginErrors {
  email: string;
  password: string;
}

const MOCK_EMAIL = 'schavlik@outlook.com';
const MOCK_PASSWORD = '123Abc321/*D';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const [emailValue, setEmailValue] = useState<string>(MOCK_EMAIL);
  const [passwordValue, setPasswordValue] = useState<string>(MOCK_PASSWORD);
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

  const handleSubmitClick = async () => {
    if (!isValidBeforeSubmit) {
      return;
    }
    
    await dispatch(userLogin({
      email: emailValue,
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
