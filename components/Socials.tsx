import React from 'react'
import { socials } from './constants'
import Link from 'next/link'

const Socials = () => {
  return (
    <div className="flex space-x-5">
          {socials.map((item) => (
            <Link
              className="text-gray-800 fill-accent hover:text-violet-600"
              key={item.href}
              href={item.href}>
              {item.icon}
            </Link>
          ))}
        </div>
  )
}

export default Socials