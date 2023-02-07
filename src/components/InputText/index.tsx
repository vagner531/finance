import React, { InputHTMLAttributes } from "react";
import { Input } from "../InputText/styles";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  Label: string;
}

export const InputText = ({ Label, ...props }: Props) => {
  return (
    <label className="flex flex-col m-">
      <span className="text-gray-500">{Label}</span>
      <Input
        type="email"
        {...props}
        className="border border-gray-200 h-10 px-4"
      />
    </label>
  );
};

export default InputText;
