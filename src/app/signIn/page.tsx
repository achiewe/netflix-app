"use client";

import React from "react";
import SignInCard from "../components/SignIn/SignInCard";


export default function page() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[url('../../public/netflixBackground.png')] bg-no-repeat bg-cover relative">
      <div className="w-full h-full bg-black absolute opacity-50" />
      <SignInCard />
      <button style={{ backgroundColor: "red", width: 300, height: 300 }}>
        achi
      </button>
    </div>
  );
}
