import React from 'react'
import CustomInput from '../costum/CustomInput'

export default function SignUpInputs() {
  return (
    <div className="flex flex-col gap-[20px]">
      <CustomInput inputType="email" value="asdasd" inputPlaceholder="Email or mobile number" />
      <CustomInput inputType="password" value="asdasd" inputPlaceholder="password" />
      <CustomInput inputType="password" value="asdasd" inputPlaceholder="repeat password" />
    </div>
  )
}
