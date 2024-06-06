import React from 'react'

interface CustomButtonProps{
buttonName:string
bgColor:string
}

export default function CustomButton({buttonName, bgColor}:CustomButtonProps) {
  return (
    <button className={`bg-[${bgColor}] w-full text-white h-[40px] rounded-[5px] font-bold cursor-pointer hover:bg-red-900`}> {buttonName} </button>
  )
}
