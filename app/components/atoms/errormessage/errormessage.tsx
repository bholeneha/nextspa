// components/atoms/ErrorMessage.tsx
import React from "react";

interface ErrorMessageProps {
  children: React.ReactNode;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ children }) => {
  return <p style={{ color: "red" }}>{children}</p>;
};

export default ErrorMessage;
