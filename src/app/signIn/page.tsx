"use client";

import React, { useState } from "react";
import SignInCard from "../components/SignIn/SignInCard";

// SignIn function

export default function page() {
  const [state, setState] = useState(2);
  console.log(useState, "asdasd");
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[url('../../public/netflixBackground.png')] bg-no-repeat bg-cover relative">
      <div className="w-full h-full bg-black absolute opacity-50" />
      <SignInCard />
    </div>
  );
}
