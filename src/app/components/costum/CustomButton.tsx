import React from 'react'

interface CustomButtonProps{
buttonName:string
}

export default function CustomButton({buttonName}:CustomButtonProps) {
  return (
    <button className={`w-full text-white bg-[red] h-[40px] rounded-[5px] font-bold cursor-pointer hover:opacity-60`}> {buttonName} </button>
  )
}
