import React from "react";
import './button.scss';

type ButtonProps = {
  onClick?: () => void;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, type}) => {
  return <button className="button" onClick={onClick} type={type}>{children}</button>;
};

export default Button;
