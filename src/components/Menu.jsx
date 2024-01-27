"use client"
import { links } from "@/utils/constants"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Menu = () => {
const[isOpen,setIsOpen]=useState(false)
  return (
    <div>
    {!isOpen?(<Image src={"/open.png"} width={30} height={30} alt="open" onClick={()=>setIsOpen(prevState=>!prevState)} />):(
    <Image src={"/close.png"} width={30} height={30} alt="close"
    onClick={()=>setIsOpen(prevState=>!prevState)}
    />
    )
}

{isOpen && <div className="bg-orange-400 text-white absolute top-12 left-0 w-full h-[calc(100vh-3rem)] flex flex-col 
     items-center justify-start text-3xl z-10">
    {
        links.map(item=>(
            <Link className="mt-10" key={item.id} href={item.url}>
                {item.title}
            </Link>
        ))
    }
</div>}
    </div>
  )
}

export default Menu

