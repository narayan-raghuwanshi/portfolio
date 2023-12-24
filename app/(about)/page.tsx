import { Button } from "@/components/ui/button";
import Link from "next/link";
import { socials } from "./constants";

export default function About() {
  return (
    <div className="flex justify-center gap-20 mt-20 items-center flex-col mb-20">
      <div className="flex flex-col max-w-lg">
        <h1 className="text-5xl font-bold text-center">Full-Stack <br />
          <span className="text-violet-500">
            <span className="text-orange-400">&lt;</span>
            Developer
            <span className="text-sky-400">&gt;</span>
          </span><br />
          with Typescript
        </h1>
        <h3 className="text-center mt-4 text-gray-500 px-10 md:px-0">
          I am <span className="text-violet-600">Narayan Raghuwanshi</span> , a developer who specializes in creating high-performance applications using the latest version of Next.js.
        </h3>
      </div>
      <div className="flex flex-col justify-between items-center gap-14">
        <div className="flex gap-4 justify-between">
          <Link href="/resume"><Button variant={"outline"}>Resume</Button></Link>
          <Link href="/projects"><Button>Projects</Button></Link>
        </div>
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
      </div>
    </div>
  )
}
