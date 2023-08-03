import './button.scss';
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type, disabled}) => {
  return <button className="button" onClick={onClick} type={type} disabled={disabled}>{children}</button>;
};

export default Button;