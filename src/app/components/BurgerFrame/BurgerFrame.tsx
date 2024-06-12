"use client";
import { RootState } from '@/app/redux/features/store';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

export default function BurgerFrame() {
    const openFrame = useSelector((store:RootState) => store.openFrame.openFrame)
  return (
    <div className={`w-[100%] h-[254px] bg-[red] ${openFrame ? "fixed" : "absolute"} top-[80px] overflow-x-hidden ${openFrame ? "right-[-100%]" : "right-0"} overflow-hidden flex flex-col justify-center items-center gap-[10px] duration-500`}>
     <Link href="/TVShows">
     TV Shows
     </Link>
        Movies
     <Link href="/Movies">
     </Link>
    New & Popular
    <Link href="/New&Popular">
    </Link>
    <Link href="/MyList">
    My List
    </Link>
    </div>
  )
}
