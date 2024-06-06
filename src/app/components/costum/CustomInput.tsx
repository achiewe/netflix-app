import React from "react";

interface inputProps {
  inputType: string;
  inputPlaceholder: string;
}

// custom function inside the customInput component
function CustomInput({ inputType, inputPlaceholder }: inputProps): JSX.Element {
  return (
    <input
      type={inputType}
      placeholder={inputPlaceholder}
      className="z-50 border outline-none w-full placeholder:text-slate-400 text-[#ffffff] px-[10px] py-[20px] rounded-[5px] bg-[rgba(54,54,54,0.3)]"
    />
  );
}

export default CustomInput;
