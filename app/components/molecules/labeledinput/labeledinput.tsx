import React from "react";
import Label from "../../atoms/label/label";
import Input from "../../atoms/input/input";

interface LabeledInputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LabeledInput: React.FC<LabeledInputProps> = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className="labeled-input">
      <Label htmlFor={placeholder}>{label}</Label>
      <Input type={type} placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
};

export default LabeledInput;
