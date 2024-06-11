import React from "react";
import CustomInput from "../costum/CustomInput";

// SignInInput function
export default function SignInInput() {
  return (
    <div className="flex flex-col gap-[20px]">
      <CustomInput inputType="email" inputPlaceholder="Email or mobile number" onChange={(e) => {
        e.target.value
      }}/>
      <CustomInput inputType="password" inputPlaceholder="password" onChange={(e) => {
        e.target.value
      }}/>
    </div>
  );
}
