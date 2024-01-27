"use client"
import { items } from '@/utils/constants';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const page = () => {
    const {category} = useParams();
    // filtered Items from param 
   const filteredItems = items.filter(item=>(item.category==category)) 
   console.log(filteredItems)
   
  return (
    <>
    <div className='flex items-center justify-center flex-wrap gap-2 '>
      {filteredItems.map((item)=>{
     
        return <div
        key={item.id}
        className="card shadow-xl p-2 rounded-md border border-gray bg-white w-[90vw] flex flex-col transition-all gap-4 h-[60vh] duration-300 md:w-[48vw] xl:w-[23vw]  "
      >
        {/* img container  */}
        {item.src && (
          <div className="h-[60%] relative w-full transition-all duration-500">
            <Image
              src={item.src}
              fill
              alt=""
              className="object-cover rounded-md"
            />
          </div>
        )}

        {/* content container  */}
        <div className=" flex-1 w-full flex justify-between flex-col gap-5">
          <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
            {item.title}
          </h1>
          <p>{item.desc}</p>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold">${item.price}</span>
            <Link href={`/product/${item.id}`}>
            <button
              className="bg-red-500 hover:bg-red-300 text-white p-2 rounded-md"
            >
              Add to Cart
            </button>
            </Link>
          </div>
        </div>
      </div>
    
    })}
    </div> 
    </>
  )
}

export default page
