"use client";

// import react and signInCard from the component
import React from "react";
import SignInCard from "../components/SignIn/SignInCard";

// sign in component 
export default function page() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[url('../../public/assets/netflixBackground.png')] bg-no-repeat bg-cover relative">
      <div className="w-full h-full bg-black absolute opacity-50" />
      <SignInCard />
    </div>
  );
}
