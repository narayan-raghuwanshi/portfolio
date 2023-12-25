import {Github, Link2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { projects } from './constants'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

const ProjectsPage = () => {
  return (
    <div className='mt-20'>
      <div className='flex justify-center flex-wrap mb-10'>
        <div className='max-w-xl md:mt-10'>
          <h2 className='text-3xl md:text-4xl font-semibold text-center md:text-start'>Browse through my newest <span className='text-sky-500'> projects.</span></h2>
          <div className='hidden md:flex justify-start items-center gap-4 text-md text-gray-400 mt-6'>
            Backend Projects <span className='text-gray-500'>|</span> Frontend Projects <span className='text-gray-500'>|</span> Full stack Projects
          </div>
        </div>
        <Image
          src="/project.png"
          alt="Projects Image"
          width={300}
          height={300} />
      </div>
      <div className=' bg-[#1c1c1c] flex justify-center items-center py-20'>
        <div className='flex flex-wrap mt-6 justify-center gap-4 md:gap-10 max-w-5xl'>
          {projects.map((item) => (
            <div key={item.repository} className='p-5 bg-[#212121] rounded-md hover:border border-gray-600 transition'>
              <Image
                src={item.image}
                alt="Projects Image"
                width={270}
                className='rounded-md opacity-90'
                height={180} />
              <div className='flex justify-between h-16'>
                <div className='flex flex-col mt-2 max-w-[230px]'>
                  <p className='text-gray-100 font-semibold text-md'>{item.title}</p>
                  <p className='text-gray-400 text-xs'>{item.description}</p>
                </div>
                <div className='flex flex-row text-gray-200 text-gray justify-end items-center space-x-1'>
                  <Link href={item.repository}><Github size={20} className='hover:text-violet-400' /></Link>
                  <Link href={item.deployment} className={cn('hover:text-violet-400',(item.deployment == '') ? 'hidden' : '')}><Link2 size={20} /></Link>
                </div>
              </div>
              <div className='max-w-[270px] mt-3 flex flex-wrap gap-2'>
                {item.techUsed.map((tech)=>(
                  <Badge variant={'outline'} key={tech} className='text-gray-300 font-light py-0.5 px-2 border-gray-600'>{tech}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectsPage