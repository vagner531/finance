import React, { InputHTMLAttributes } from "react";
import { Input } from "../InputText/styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputText = ({ Label, ...props }) => {
  return (
    <label className="flex flex-col m-5">
      <span>{Label}</span>
      <Input
        type="email"
        {...props}
        className="border border-gray-200 h-10 px-4"
      />
    </label>
  );
};

export default InputText;
