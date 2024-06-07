import React from 'react'

interface CustomButtonProps{
buttonName:string
btnColor:string
}

export default function CustomButton({buttonName, btnColor}:CustomButtonProps) {
  return (
    <button className={`w-full text-white bg-[${btnColor}] h-[40px] rounded-[5px] font-bold cursor-pointer hover:opacity-60`}> {buttonName} </button>
  )
}
