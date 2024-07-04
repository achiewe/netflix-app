"use client";


// import react and customButton
import React from 'react'
import CustomButton from '../costum/CustomButton'


// SignInButton component
export default function SignInButton() {
  const pathname = window.location.pathname;
  console.log(pathname);


  // handleSignInClick function
  const handleSignInClick = () => {
    console.log("Sign In button clicked");
    window.location.href = '/';
  };

  const handleSignUpClick = () => {
    console.log("Sign Up button clicked");
  
  };
  return (
    <div className='w-full flex flex-col gap-[16px]'>
      <CustomButton buttonName="Sign In" onClick={handleSignInClick}/>
      <p className='text-[white] font-normal opacity-70 text-center'>OR</p>
      <CustomButton buttonName="Sign Up" onClick={handleSignUpClick}/>
    </div>
  )
}
