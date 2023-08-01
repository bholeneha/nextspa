import './labeledinput.scss';
import React from 'react';
import Label from '../../atoms/label/label';
import Input from '../../atoms/input/input';
import { FieldRenderProps } from 'react-final-form';

interface LabeledInputProps extends FieldRenderProps<any, HTMLElement> {
  label: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({ input, label }) => {
  const { name, value, onChange, onBlur, onFocus} = input;

  // Determine the input type based on the field name
  const isPasswordField = name === 'password';
  const inputType = isPasswordField ? 'password' : 'text';

  return (
    <div className='labeled-input'>
      <Label children={label} htmlFor={name} />
      <Input
        type={inputType}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        placeholder={input.placeholder}
      />
    </div>
  );
};

export default LabeledInput;
