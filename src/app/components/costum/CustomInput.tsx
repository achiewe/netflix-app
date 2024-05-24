import React from "react";

interface inputProps {
  inputType: string;
  inputPlaceholder: string;
}

function CustomInput({ inputType, inputPlaceholder }: inputProps): JSX.Element {
  return <input type={inputType} placeholder={inputPlaceholder} />;
}

export default CustomInput;
