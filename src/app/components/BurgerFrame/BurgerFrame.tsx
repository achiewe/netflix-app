"use client";

// importing files
import { RootState } from '@/app/redux/features/store';
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux';

// BurgerFrame component
export default function BurgerFrame() {
    const openFrame = useSelector((store:RootState) => store.openFrame.openFrame)
  return (
    <div className={`w-[100%] h-[254px] bg-[red] ${openFrame ? "fixed" : "absolute"} top-[80px] overflow-x-hidden ${openFrame ? "right-[-100%]" : "right-0"} overflow-hidden flex flex-col justify-center items-center gap-[20px] duration-500`}>
     <Link href="/TVShows" className='text-[20px] font-extrabold hover:text-[white]'>
     TV Shows
     </Link>

     <Link href="/Movies" className='text-[20px] font-extrabold hover:text-[white]'>
     Movies
     </Link>
  
    <Link href="/New&Popular" className='text-[20px] font-extrabold hover:text-[white]'>
    New & Popular
    </Link>
    <Link href="/MyList" className='text-[20px] font-extrabold hover:text-[white]'>
    My List
    </Link>
    </div>
  )
}
