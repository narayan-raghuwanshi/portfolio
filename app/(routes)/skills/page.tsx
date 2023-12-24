import React from 'react'
import { skills } from './constants'
import { Badge } from '@/components/ui/badge'
import Image from 'next/image'
import { cn } from '@/lib/utils'

const SkillsPage = () => {
  return (
    <div className='my-20 md:my-32 mx-4 flex justify-center gap-10 flex-wrap'>
      <Image
        src="/skills.png"
        alt="Skills Image"
        width={340}
        height={340} />
      <div className='flex items-center flex-col'>
        <h1 className="text-xl font-semibold max-w-lg">One of the most widely used tech stacks for multiple reasons is the combination of <span className="text-orange-400">Nextjs</span> for fast and SEO friendly applications and <span className='text-sky-400'>TypeScript</span> for a smooth development experience.</h1>
        <div className='flex flex-col space-y-4 max-w-lg mt-8'>
          <div className='flex flex-wrap gap-3'>
            {skills.map((item, index) => (
              <Badge
                key={item}
                className={cn('cursor-default', ((Math.floor(Math.random() * 2) + 1) == 2) ? 'text-violet-400' : '')}
              >{item}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SkillsPage