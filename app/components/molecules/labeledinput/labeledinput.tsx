import React from 'react';
import Label from '../../atoms/label/label';
import Input from '../../atoms/input/input';
import { FieldRenderProps } from 'react-final-form';
import './labeledinput.scss';

interface LabeledInputProps extends FieldRenderProps<any, HTMLElement> {
  label: string;
}

const LabeledInput: React.FC<LabeledInputProps> = ({ input, label }) => {
  const { name, value, onChange, onBlur, onFocus} = input;


  return (
    <div className='labeled-input'>
      <Label children={label} htmlFor={name} />
      <Input
        type={input.type}
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
