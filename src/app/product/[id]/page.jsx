"use client"
import Price from '@/components/Price';
import { items } from '@/utils/constants';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
  const {id} = useParams();
const filteredProduct = items.filter(item=>item.id==id);
console.log(filteredProduct)
  return (
    <>
        <div className='p-4 lg:px-20 xl:px-40 h-[calc(100vh-3rem)] md:h-[calc(100vh-6rem)] flex flex-col justify-around text-red-500 md:flex-row md:gap-8 md:items-center'>

<div className='relative flex-1 w-full h-1/2 md:h-[70%]'>
  <Image src={filteredProduct[0].src}  alt='singleProduct' fill className='object-contain'/> 
</div>

<div className='h-1/2 flex flex-col gap-4 md:h-[70%] md:justify-center md:gap-6 xl:gap-8'>
<h1 className="text-3xl font-bold uppercase xl:text-5xl">{filteredProduct[0].title}</h1>
  <p>{filteredProduct[0].desc}</p>
  <Price price={filteredProduct[0].price}  options={filteredProduct[0].options} id={filteredProduct[0].id} />
</div>

</div>
    </>
  )
}

export default page
