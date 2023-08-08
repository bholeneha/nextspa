import './button.scss';
import React from "react";

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type, disabled, className}) => {
  return <button className={`button ${className}`} onClick={onClick} type={type} disabled={disabled}>{children}</button>;
};

export default Button;