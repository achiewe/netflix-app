import React from "react";
import CustomInput from "../costum/CustomInput";

// SignInInput function
export default function SignInInput() {
  return (
    <div className="flex flex-col gap-[20px]">
      <CustomInput inputType="text" inputPlaceholder="Email or mobile number" />
      <CustomInput inputType="text" inputPlaceholder="Email or mobile number" />
    </div>
  );
}
