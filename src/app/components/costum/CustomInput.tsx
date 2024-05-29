import React from "react";

interface inputProps {
  inputType: string;
  inputPlaceholder: string;
}

// custom input
function CustomInput({ inputType, inputPlaceholder }: inputProps): JSX.Element {
  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      className="outline-none w-full text-inherit px-[10px] py-[20px] rounded-[10px] border-stone-600 bg-red-900 z-10"
    />
  );
}

export default CustomInput;
