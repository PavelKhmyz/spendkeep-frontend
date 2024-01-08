import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginForm } from 'src/components/Forms/LoginForm';
import { RegistrationForm } from 'src/components/Forms/RegistrationForm';
import './AuthorizationPage.style.scss';

interface IFormType {
  type: string;
  label: string;
  switch: string;
  switchButton: string;
}

const signInProps: IFormType = {
  type: 'signIn',
  label: 'Log in to your account',
  switch: 'Don`t have an account?',
  switchButton: 'SignUp',
};

const signUpProps: IFormType = {
  type: 'signUp',
  label: 'Create your account',
  switch: 'Have an account?',
  switchButton: 'SignIn',
};

export const AuthorizationPage = () => {
  const [formType, setFormType] = useState<IFormType>(signInProps);

  const handleSwitchForm = () => {
    if (formType.type === 'signIn') {
      setFormType(signUpProps);
    } else {
      setFormType(signInProps);
    }
  };

  return (
    <div className='authorizationWrapper'>
      <div className='assetContainer' />
      <div className='formContainer'>
        <h1 className='authLogo'>
          <Link to={ '/' }>SpendKeep</Link>
        </h1>
        <h2 className='authLabel'>{ formType.label }</h2>
        <p className='authSwitch'>
          { formType.switch + '\n' } 
          <button type='button' onClick={ handleSwitchForm }>
            { formType.switchButton }
          </button>
        </p>
        { formType.type === 'signIn' ? <LoginForm /> : <RegistrationForm />}
        <div className='test' />
      </div>
    </div>
  );
};
