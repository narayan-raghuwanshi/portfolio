"use client";

import { useState } from "react";
import Link from "next/link";
import Socials from "@/components/Socials";
import { skills } from "@/lib/data/skills";
import { projects } from "@/lib/data/projects";
import { experiences } from "@/lib/data/experience";
import Image from "next/image";

export default function PortfolioModern() {
  const [activeProject, setActiveProject] = useState(projects[0]);

  return (
    <main className="min-h-screen pt-24 pb-20 px-6 sm:px-12 max-w-6xl mx-auto relative z-10 selection:bg-fuchsia-500/30">
      {/* Decorative Blobs */}
      <div className="fixed top-20 left-1/4 w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-indigo-500/20 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-blob pointer-events-none -z-10" />
      <div className="fixed bottom-20 right-1/4 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-fuchsia-500/20 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-blob animation-delay-2000 pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="flex flex-col items-start gap-6 mt-10 md:mt-24 mb-32 animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-gray-300 shadow-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-500 relative">
            <span className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></span>
          </span>
          Available for new opportunities
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white max-w-4xl leading-[1.1]">
          Building <br className="hidden md:block" />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-400 via-sky-400 to-fuchsia-400">clean code</span> & <br className="hidden md:block" /> fluid interfaces.
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed mt-4 font-light">
          Hi, I am <span className="text-white font-medium">Narayan Raghuwanshi</span>, a Full-Stack Developer passionate about Next.js, scalable backends, and crafting great user experiences.
        </p>

        <div className="flex flex-wrap items-center gap-6 mt-8">
          <Link href="/resume" className="group relative px-6 py-3 font-semibold text-white bg-white/10 hover:bg-white/20 rounded-xl transition-all border border-white/10 backdrop-blur-md overflow-hidden shadow-[0_0_40px_rgba(120,119,198,0.3)]">
            <span className="relative z-10">View Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/50 to-fuchsia-600/50 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>
          <div className="ml-2">
            <Socials />
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="mb-32 relative">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight">Professional Experience</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="flex flex-col gap-12 border-l border-white/10 pl-6 md:pl-8 ml-4 relative">
          {experiences.map((exp, index) => (
            <div key={index} className="relative group animate-in fade-in slide-in-from-bottom-4" style={{ animationDelay: `${index * 150}ms` }}>
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-background border border-indigo-500 z-10 group-hover:bg-indigo-500 transition-colors shadow-[0_0_10px_rgba(99,102,241,0.5)]" />

              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <h3 className="text-2xl font-bold text-white tracking-tight">{exp.role}</h3>
                <span className="hidden md:block text-gray-600">—</span>
                <span className="text-lg text-indigo-400 font-medium">{exp.company}</span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-4 text-sm font-medium text-gray-400">
                <div className="flex items-center gap-1.5 bg-white/5 py-1 px-3 rounded-full border border-white/10">
                  {exp.duration}
                </div>
                <div className="flex items-center gap-1.5 bg-white/5 py-1 px-3 rounded-full border border-white/10">
                  {exp.location}
                </div>
              </div>

              <div className="space-y-3 mt-4 text-gray-300 leading-relaxed font-light">
                {exp.description.map((desc, i) => (
                  <p key={i}>{desc}</p>
                ))}
              </div>

              {exp.skills && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="text-xs font-semibold text-fuchsia-300 bg-fuchsia-500/10 px-2.5 py-1 rounded-md border border-fuchsia-500/20">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="mb-32 relative">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight">Technical Arsenal</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all cursor-default shadow-lg backdrop-blur-sm hover:shadow-[0_0_20px_rgba(120,119,198,0.2)] hover:-translate-y-0.5 duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Selected Projects - Split Pane Layout to prevent long scrolling */}
      <section className="mb-32 relative">
        <div className="flex items-center gap-4 mb-10">
          <h2 className="text-3xl font-bold text-white tracking-tight">Selected Work</h2>
          <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 min-h-[500px]">
          {/* Left Pane: Project List */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2 relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent hidden lg:block" />

            {projects.map((project, idx) => {
              const isActive = activeProject.title === project.title;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveProject(project)}
                  className={`text-left px-6 py-4 rounded-xl transition-all duration-300 relative group overflow-hidden ${isActive
                    ? "bg-white/10 border-white/20 text-white shadow-[0_0_30px_rgba(120,119,198,0.15)]"
                    : "hover:bg-white/5 text-gray-400 hover:text-gray-200 border-transparent"
                    } border`}
                >
                  {isActive && (
                    <div className="absolute left-0 top-1/4 bottom-1/4 w-1 bg-gradient-to-b from-violet-400 to-fuchsia-400 rounded-r-md" />
                  )}
                  <h3 className="font-bold text-lg">{project.title}</h3>
                  <p className="text-sm opacity-60 line-clamp-1 mt-1">{project.description}</p>
                </button>
              );
            })}
          </div>

          {/* Right Pane: Active Project Details */}
          <div className="w-full lg:w-2/3 flex flex-col pt-4 lg:pt-0">
            <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl transition-all duration-500 flex flex-col h-full animate-in fade-in zoom-in-95" key={activeProject.title}>

              <div className="relative w-full aspect-video bg-gray-900 border-b border-white/10 overflow-hidden group">
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <h3 className="text-3xl font-bold text-white tracking-tight shadow-black/50 drop-shadow-lg leading-tight w-2/3">
                    {activeProject.title}
                  </h3>
                  <div className="flex gap-3">
                    {activeProject.repository && (
                      <Link href={activeProject.repository} target="_blank" className="p-3 rounded-full bg-black/50 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white transition-all hover:scale-110">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                      </Link>
                    )}
                    {activeProject.deployment && (
                      <Link href={activeProject.deployment} target="_blank" className="p-3 rounded-full bg-violet-600/80 backdrop-blur-md border border-violet-400/50 hover:bg-violet-500 text-white transition-all hover:scale-110 shadow-[0_0_20px_rgba(139,92,246,0.4)]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-1 bg-gradient-to-b from-gray-900 to-background">
                <p className="text-gray-300 text-lg leading-relaxed mb-8 flex-1">
                  {activeProject.description}
                </p>

                <div>
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeProject.techUsed.map((tech, tIdx) => (
                      <span key={tIdx} className="text-sm font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20 shadow-inner">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-8 border-t border-white/10 text-center flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
        <p className="text-sm text-gray-400 flex items-center gap-2">
          &copy; {new Date().getFullYear()} Narayan Raghuwanshi. Architected with Next.js & Tailwind.
        </p>
      </footer>
    </main>
  );
}
