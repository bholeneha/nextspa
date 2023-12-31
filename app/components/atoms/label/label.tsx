import React from "react";

type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
  return <label className="label" htmlFor={htmlFor}>{children}</label>;
};

export default Label;
