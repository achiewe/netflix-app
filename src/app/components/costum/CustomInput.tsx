import React from "react";

// interface of the states
interface inputProps {
  inputType: string;
  inputPlaceholder: string;
  value:string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

// custom function inside the customInput component
function CustomInput({ inputType, inputPlaceholder, onChange, value }: inputProps): JSX.Element {
  return (
    <input
    onChange={onChange}
      type={inputType}
      value={value}
      placeholder={inputPlaceholder}
      className="z-50 border outline-none w-full placeholder:text-slate-400 text-[#ffffff] px-[10px] py-[20px] rounded-[5px] bg-[rgba(54,54,54,0.3)]"
    />
  );
}

export default CustomInput;
