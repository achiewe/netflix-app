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
      className="z-20 border outline-none w-full placeholder:text-slate-400 text-[#ffffff] px-[10px] py-[20px] rounded-[5px] bg-[#363636] opacity-30"
    />
  );
}

export default CustomInput;
