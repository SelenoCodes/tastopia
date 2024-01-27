import { links } from '@/utils/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
  return (
    <div className='h-12 md:h-24 border border-red-500 flex justify-between items-center bg-orange-400 text-white uppercase p-4'>
   {/* Logo   */}
   <div className="text-xl md:text-2xl font-bold"><Link href="/">Tastopia</Link></div>
{/* Desktop Links  */}
<div className='hidden md:flex items-center gap-4 text-base md:text-xl'>
    {links.map(item=>(
        <Link key={item.id} href={item.url}>{item.title}</Link>
    ))}
</div>

{/* MENU  */}
<div className='md:hidden'><Menu/></div>

{/* Left Links  */}

<div className='hidden md:flex gap-4 items-center'>
    <div className='p-1 bg-orange-300 flex items-center gap-2 rounded-md text-xl'>
       <Image src={'/phone.png'} width={20} height={20} alt='call' />
       <span>930 421 675
</span>
    </div>
    <Link href={"/cart"}>
    <Image src={"/cart.png"} width={50} height={50} alt='cart' />
    </Link>
</div>


</div>

  )
}

export default Navbar
