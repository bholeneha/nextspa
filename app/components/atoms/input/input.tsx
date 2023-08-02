import './input.scss'
import React, { ChangeEvent, FocusEvent } from "react";

interface InputProps {
  type?: string;
  name: string; // Make 'name' mandatory
  value: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
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
