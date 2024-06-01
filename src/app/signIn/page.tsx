"use client";

import React, { useCallback, useRef, useState } from "react";
import SignInCard from "../components/SignIn/SignInCard";

// SignIn function

export default function page() {
  const buttonRef = useRef(null);
  const functionUseCallback = useCallback(() => {
    console.log("gendi");
  }, []);

  console.log(buttonRef, "ads");

  return (
    <div className="flex justify-center items-center w-full h-screen bg-[url('../../public/netflixBackground.png')] bg-no-repeat bg-cover relative">
      <div className="w-full h-full bg-black absolute opacity-50" />
      <SignInCard />
      <button
        style={{ backgroundColor: "red", width: 300, height: 300 }}
        ref={buttonRef}
      >
        achi
      </button>
    </div>
  );
}
