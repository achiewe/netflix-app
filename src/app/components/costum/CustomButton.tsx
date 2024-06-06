import React from 'react'

export default function CustomButton({buttonName}) {
  return (
    <button className='bg-[red] w-full text-white h-[40px] rounded-[5px] font-bold cursor-pointer'> {buttonName} </button>
  )
}
