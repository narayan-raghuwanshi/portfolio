import { Button } from "@/components/ui/button";
import Link from "next/link";
import Socials from "@/components/Socials";

export default function About() {
  return (
    <div className="flex justify-center gap-20 mt-20 items-center flex-col mb-20 text-center">
      <div className='pointer-events-none absolute inset-x-0 mt-52 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
        <div style={{
          clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
        }} className="sticky left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
      <div className="flex flex-col max-w-lg">
        <h1 className="text-3xl md:text-5xl font-bold">Full-Stack <br />
          <span className="text-violet-500">
            <span className="text-orange-400">&lt;</span>
            Developer
            <span className="text-sky-400">&gt;</span>
          </span><br />
          with Typescript
        </h1>
        <h3 className="mt-4 text-gray-500 px-10 md:px-0">
          I am <span className="text-violet-600">Narayan Raghuwanshi</span> , a developer who specializes in creating high-performance applications using the latest version of Next.js.
        </h3>
      </div>
      <div className="flex flex-col justify-between items-center gap-14">
        <div className="flex gap-4 justify-between">
          <Link href="/resume"><Button variant={"outline"}>Resume</Button></Link>
          <Link href="/projects"><Button>Projects</Button></Link>
        </div>
        <Socials/>
      </div>
    </div>
  )
}
