"use client"

import React, { useState } from 'react'
import CustomInput from '../costum/CustomInput'

export default function SignUpInputs() {
    const [email, setEmail] = useState<string>("");
    console.log(email)
  return (
    <div className="flex flex-col gap-[20px]">
      <CustomInput inputType="email" value="asdasd" inputPlaceholder="Email or mobile number"  onChange={(e) => {
        setEmail(e.target.value)
      }} />
      <CustomInput inputType="password" value="asdasd" inputPlaceholder="password" onChange={(e:any) => {setEmail(e.target.value)}} />
      <CustomInput inputType="password" value="asdasd" inputPlaceholder="repeat password" onChange={(e:any) => {setEmail(e.target.value)}} />
    </div>
  )
}
