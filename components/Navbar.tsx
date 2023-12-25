"use client"
import { Bug, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

import { cn } from '@/lib/utils'
import { navbarItems } from './constants'

const Navbar = () => {

  const pathName = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className='px-4 md:px-8 flex justify-between items-center h-16 shadow-md shadow-gray-400/15'>
        <Link href="/" className='text-gray-900 ml-6 md:ml-16 hover:text-violet-600 transition'>
          <Bug size={28} />
        </Link>
        <div className='hidden md:flex justify-between items-center space-x-4 md:mr-16'>
          {navbarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn('text-gray-900 font-semibold hover:bg-accent px-3 py-1.5 rounded-md hover:text-violet-600 transition', (pathName === item.href) ? 'bg-accent text-violet-600' : '')}>
              {item.title}
            </Link>
          ))}
        </div>
        <button onClick={() => (setOpen(!open))} className='md:hidden mr-6'>
          {!open ? <Menu /> : <X />}
        </button>
      </div>
      <div className={cn('flex flex-col md:hidden shadow-lg shadow-gray-400/15')}>
        {(open) && navbarItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn('text-gray-900 font-semibold hover:bg-gray-100 px-10 py-3 rounded-md hover:text-violet-600 transition', (pathName === item.href) ? 'bg-gray-100 text-violet-600' : '')}
            onClick={() => setOpen(false)}>
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar