import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    const Menu = [
        {
            id:1,
            name:'Home',
            path:'/'
        },
        {
            id:2,
            name:'Explore',
            path:'/explore'
        },
        {
            id:3,
            name:'Contact Us',
            path:'/'
        },
    ]

  return (
   
    <div className='flex items-center justify-between p-4 shadow-sm'>
        <div className='flex items-center gap-10'>
        <Image src={'/logo.svg'} alt='logo' width={180} height={80}/>
        <ul className='md:flex gap-8 hidden'>
            {Menu.map((item,index)=>(
                <Link href={item.path}>
                <li className='text-black hover:text-[#0D7DFF] cursor-pointer hover:scale-105 transition-all ease-in-out '>{item.name}</li>
                </Link>
            ))}
        
        </ul>
        </div>
        <Button>Get Started</Button>


   
    </div>
   
  )
}
