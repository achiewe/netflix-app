"use client";

import React from 'react'
import CustomButton from '../costum/CustomButton'



// SignInButton component
export default function SignInButton() {
  const pathname = window.location.pathname;
  console.log(pathname);


  const handleSignInClick = () => {
    console.log("Sign In button clicked");
    // Add your sign-in logic here
  };

  const handleSignUpClick = () => {
    console.log("Sign Up button clicked");
    // Add your sign-up logic here
  };
  return (
    <div className='w-full flex flex-col gap-[16px]'>
      <CustomButton buttonName="Sign In" onClick={handleSignInClick}/>
      <p className='text-[white] font-normal opacity-70 text-center'>OR</p>
      <CustomButton buttonName="Sign Up" onClick={handleSignUpClick}/>
    </div>
  )
}
