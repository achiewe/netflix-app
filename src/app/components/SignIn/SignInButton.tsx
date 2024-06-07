"use client";

import React from 'react'
import CustomButton from '../costum/CustomButton'


export default function SignInButton() {
  return (
    <div className='w-full flex flex-col gap-[16px]'>
      <CustomButton buttonName="Sign In" btnColor="red"/>
      <p className='text-[white] font-normal opacity-70 text-center'>OR</p>
      <CustomButton buttonName="Sign Up" btnColor="green"/>
    </div>
  )
}
