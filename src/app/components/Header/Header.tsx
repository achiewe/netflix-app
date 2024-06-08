import React from 'react'
import netflixLogo from "../../../../public/assets/netflixLogo.png";
import Image from 'next/image';
export default function Header() {
  return (
    <header className='flex flex-row w-full items-center justify-between px-[15px]'>
   <Image src={netflixLogo} alt='netflix logo' className='w-[150px] h-[100px] cursor-pointer'/>
    </header>
  )
}
