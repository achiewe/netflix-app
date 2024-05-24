import React from "react";
import CustomInput from "../costum/CustomInput";

export default function SignInInput() {
  return (
    <div>
      <CustomInput inputType="text" inputPlaceholder="Email or mobile number" />
    </div>
  );
}
