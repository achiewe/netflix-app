import React from 'react'
import CustomInput from '../costum/CustomInput'

export default function SignUpInputs() {
  return (
    <div className="flex flex-col gap-[20px]">
      <CustomInput inputType="email" value={emailValue} inputPlaceholder="Email or mobile number" onChange={(e) => {
        setEmailValue(e.target.value)
      }}/>
      <CustomInput inputType="password" value={passwordValue} inputPlaceholder="password" onChange={(e) => {
        setPasswordValue(e.target.value)
      }}/>
      <CustomInput inputType="password" value={passwordValue} inputPlaceholder="password" onChange={(e) => {
        setPasswordValue(e.target.value)
      }}/>
    </div>
  )
}
