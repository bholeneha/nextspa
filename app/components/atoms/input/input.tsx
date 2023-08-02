import './input.scss'
import React, { ChangeEvent, FocusEvent } from "react";
import { FieldRenderProps } from 'react-final-form';

interface InputProps extends FieldRenderProps<string, HTMLInputElement> {
  type?: string;
  name: string;
  value?: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({type, name, value, placeholder, onChange, onBlur, onFocus}) => {
  return (
    <input
      className='input'
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      onFocus={onFocus}
      placeholder={placeholder}
    />
  );
};

export default Input;
