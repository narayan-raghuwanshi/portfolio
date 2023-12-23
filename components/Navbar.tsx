"use client"
import { Bug, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

import { cn } from '@/lib/utils'

const navbarItems = [
  {
    title: "About",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "Skills",
    href: "/skills",
  }
]

const Navbar = () => {

  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className='px-4 md:px-8 flex justify-between items-center h-16 shadow-md shadow-gray-400/15 bg-opacity-10 sticky'>
        <Link href="/" className='text-gray-900 ml-6 md:ml-16 hover:text-gray-600'>
          <Bug size={28} />
        </Link>
        <div className='hidden md:flex justify-between items-center space-x-4 md:mr-16'>
          {navbarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn('text-gray-900 font-semibold hover:bg-gray-100 px-3 py-1.5 rounded-md hover:text-gray-500 transition', (pathName === item.href) ? 'bg-gray-100 text-gray-500' : '')}>
              {item.title}
            </Link>
          ))}
        </div>
        <button onClick={() => (setOpen(!open))} className='md:hidden'>
          {!open ? <Menu /> : <X />}
        </button>
      </div>
      <div className='flex flex-col md:hidden'>
        {(open) && navbarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn('text-gray-900 font-semibold hover:bg-gray-100 px-3 py-3 rounded-md hover:text-gray-500 transition', (pathName === item.href) ? 'bg-gray-100 text-gray-500' : '')}
            onClick={() => setOpen(false)}>
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar