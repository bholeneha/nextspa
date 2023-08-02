import './input.scss'
import React, { FocusEvent } from "react";

interface InputProps {
  type?: string;
  name: string; // Make 'name' mandatory
  value: string;
  onChange: (value: any) => void;
  placeholder?: string;
  onBlur?: (event: FocusEvent<any>) => void;
  onFocus?: (event: FocusEvent<any>) => void;
}

const Input: React.FC<InputProps> = (input) => {
  return (
    <input
      className='input'
      type={input.type}
      name={input.name}
      value={input.value}
      onChange={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      placeholder={input.placeholder}
    />
  );
};

export default Input;
