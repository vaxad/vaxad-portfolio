import React from 'react'

export default function Toast({error,text,setToast,toast}) {
  return (
    <a href="https://vaxad.vercel.app" className={`py-2 scale-90 hover:scale-105 cursor-pointer hover:bg-opacity-90 underline decoration-black md:scale-100 px-4 ${toast?"translate-x-0 delay-0 duration-300":"translate-x-[200%] delay-100 duration-700"} transition-all  flex flex-row gap-5 items-center justify-between w-fit min-w-[30vw] bg-slate-100 bg-opacity-80 rounded-lg fixed z-50 top-20 right-0 md:right-16`}>
        <div className=' flex flex-row justify-start items-center gap-2'>
        {error?
        <img width="16" height="16" src="https://img.icons8.com/color/48/box-important--v1.png" alt="box-important--v1"/>:
        <img width="16" height="16" src="https://img.icons8.com/office/16/checked--v1.png" alt="checked--v1"/>
}
        <p className=' text-sm md:text-md'>{text}</p>
        </div>
        <button onClick={()=>{setToast(false)}} className='w-fit h-fit p-1 bg-transparent rounded-md  hover:bg-red-400 transition-all'>
        <img width="16" height="16" src="https://img.icons8.com/ios/50/000000/multiply.png" alt="multiply"/>
        </button>
    </a>
  )
}
