"use client";

import React, { useState } from "react";
import CustomInput from "../costum/CustomInput";

// SignInInput function
export default function SignInInput() {

  const [emailValue, setEmailValue] = useState<string>("");
  const [passwordValue, setPasswordValue] = useState<string>("");


  return (
    <div className="flex flex-col gap-[20px]">
      <CustomInput inputType="email" value={emailValue} inputPlaceholder="Email or mobile number" onChange={(e) => {
        setEmailValue(e.target.value)
      }}/>
      <CustomInput inputType="password" value={passwordValue} inputPlaceholder="password" onChange={(e) => {
        setPasswordValue(e.target.value)
      }}/>
    </div>
  );
}
