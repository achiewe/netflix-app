"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import SignInCard from "../components/SignIn/SignInCard";
import { createContext } from "vm";

// SignIn function

export default function page() {
  let name = "achi";
  const myContext = createContext();
  return (
    <myContext.Provider value={name}>
      <div className="flex justify-center items-center w-full h-screen bg-[url('../../public/netflixBackground.png')] bg-no-repeat bg-cover relative">
        <div className="w-full h-full bg-black absolute opacity-50" />
        <SignInCard />
        <button style={{ backgroundColor: "red", width: 300, height: 300 }}>
          achi
        </button>
      </div>
    </myContext.Provider>
  );
}
