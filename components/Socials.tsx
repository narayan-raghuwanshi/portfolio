import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Mail, Pencil, Twitter } from "lucide-react";

const socials = [
  { icon: <Github size={20} />, href: "https://github.com/narayan-raghuwanshi" },
  { icon: <Mail size={20} />, href: "mailto:narayan.raghu26@gmail.com" },
  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/narayan-raghuwanshi-4589b4290/" },
  { icon: <Twitter size={20} />, href: "https://twitter.com/narayan_psr" },
  { icon: <Pencil size={20} />, href: "https://medium.com/@narayan.raghu26" }
];

const Socials = () => {
  return (
    <div className="flex space-x-4">
      {socials.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          target="_blank"
          className="p-2 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 hover:shadow-[0_0_15px_rgba(139,92,246,0.3)] transition-all duration-300"
        >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}

export default Socials