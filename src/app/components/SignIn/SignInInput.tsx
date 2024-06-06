import React from "react";
import CustomInput from "../costum/CustomInput";

// SignInInput function
export default function SignInInput() {
  return (
    <div className="flex flex-col gap-[20px]">
      <CustomInput inputType="email" inputPlaceholder="Email or mobile number" />
      <CustomInput inputType="password" inputPlaceholder="password" />
    </div>
  );
}
