"use client"
import { slides } from "@/utils/constants"
import Image from "next/image"
import { useEffect, useState } from "react"
const Slider = () => {
const[currSlide,setCurrSlide]
=useState(0)

useEffect(()=>{
  const interval= setInterval(()=>{
  setCurrSlide(prevState=>prevState==slides.length-1 ? 0 : prevState+1)
   },5000)
   return()=>clearInterval(interval)
},[])
  return (
    // Main Wapper 
    <div className='bg-orange-400 h-[calc(100vh-3rem)] md:h-[calc(100vh-6rem)] flex flex-col lg:flex-row'>
 
{/* Content wrapper */}
<div className=" flex-1 flex items-center justify-center flex-col gap-2 text-[#f8faed] font-bold  ">
        <h1 className=" text-4xl text-center uppercase p-4 md:p-10 md:text-5xl xl:text-7xl">
      {slides[currSlide].title}
        </h1>
        <button className="bg-red-500 hover:bg-red-600 rounded-md text-white py-4 px-8">Order Now</button>
      </div>

{/* Img wrapper  */}
<div className='flex-1 w-full relative'>
    <Image alt="food" src={slides[currSlide].src} fill className="object-contain"  />
</div>

    </div>
  )
}

export default Slider
