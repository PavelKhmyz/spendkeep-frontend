import { useState } from 'react';
import uniqid from 'uniqid';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './Input.style.scss';

type InputType = 'text' | 'password';

interface IInputProps {
  props: { label: string; placeholder: string; };
  type: InputType;
  value: string;
  disabled?: boolean;
  showValueButton?: boolean;
  validationMessage?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
};

export const Input = ({
  props,
  type,
  value,
  disabled = false,
  showValueButton = false,
  validationMessage,
  onChange,
  onBlur = () => {},
}: IInputProps): JSX.Element => {
  const { label, placeholder } = props;
  const [inputType, setInputType] = useState<InputType>(type);

  const id = uniqid();

  const handleShowPassword = () =>{
    if (inputType === 'password') {
      setInputType('text');
    } else {
      setInputType('password');
    }
  };

  return (
    <div className='inputWrapper'>      
      <label htmlFor={ id } className='inputLabel'>
        <span>{ label }</span>
      </label>
      <div className='inputContainer' style={ validationMessage ? { border: '2px solid red' } : {} }>
        <input
          id={ id }
          className='inputField'
          type={ inputType }
          placeholder={ placeholder }
          onChange={ onChange }
          value={ value }
          disabled={ disabled }
          onBlur={ onBlur }
        />
        {showValueButton && (
          <button
            type='button'
            onClick={ handleShowPassword }
            className='showButton'
            tabIndex={ -1 }
          >
            { inputType === 'password' ? <RemoveRedEyeIcon /> : <VisibilityOffIcon/> }
          </button>
        )}
      </div>
      { validationMessage && <p className='validationMessage'>{ validationMessage }</p> }
    </div>
  );
};
