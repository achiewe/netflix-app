import React from "react";

interface inputProps {
  inputType: string;
  inputPlaceholder: string;
}

function CustomInput({ inputType, inputPlaceholder }: inputProps): JSX.Element {
  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      className="w-full text-inherit px-[10px] py-[20px]"
    />
  );
}

export default CustomInput;
