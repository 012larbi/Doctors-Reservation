import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

function Header() {
    const menu = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "Explore", path: "/explore" },
        { id: 3, name: "Contact Us", path: "/contact" },

    ]
    return (
        <div className='w-full flex items-center justify-between p-8 shadow-sm'>
            <div className='flex items-center gap-10'>
                <Image src="/assets/imag/logo.png" alt="logo"
                    width={60}
                    height={60}
                />

                <ul className='md:flex items-center gap-8 hidden'>
                    {menu.map((item, index) => (
                        <Link href={item.path} key= {index}>
                        <li className='hover:text-lime-600 cursor-pointer hover:scale-105 transition-all'>{item.name}</li>
                        </Link>

                    ))}
                </ul>
                
            </div>
            <Button>Get Started</Button>
        </div>
    )
}

export default Header
