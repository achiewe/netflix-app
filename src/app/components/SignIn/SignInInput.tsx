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
        e.target.value
      }}/>
      <CustomInput inputType="password" value={passwordValue} inputPlaceholder="password" onChange={(e) => {
        e.target.value
      }}/>
    </div>
  );
}
