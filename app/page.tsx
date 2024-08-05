"use client"

import React, { Suspense } from 'react'

import { Syne, Inter, Poppins, Lato, Ubuntu_Mono } from 'next/font/google'
import { motion } from "framer-motion"

const syne = Syne({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin-ext"] })
const inter = Inter({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin-ext"] })
const poppins = Poppins({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin-ext"] })
const lato = Lato({ weight: ["100", "300", "400", "700", "900"], subsets: ["latin-ext"] })
const ubuntu_mono = Ubuntu_Mono({ weight: ["400", "700"], subsets: ["latin-ext"] })

import Particles from "@/components/magicui/particles";
import Image from 'next/image'
import MyMarquee from '@/components/custom/marquee'
import StackBeams from '@/components/custom/stackBeams'
import History from '@/components/custom/history'
import Projects from '@/components/custom/projects'
import { Spotlight } from '@/components/ui/spotlight'

function page() {
  return (
    <div>

      {/* PArticles */}
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />

      <section id='intro' className=' md:h-screen h-[80vh] w-screen'>
        <div className=' w-full h-full flex items-center justify-center'>
          <div>
            {/* My Photo */}
            <div className=' w-[100px] h-[100px] rounded-full ml-auto mr-auto mb-5 overflow-hidden'>
              <Image src={"/assets/me.jpg"} alt='me :)' className=' w-full h-full' width={70} height={70} />
            </div>
            <motion.h1
              className={`${inter.className} text-6xl text-center font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 opacity-0`}
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1 }}
              transition={{ ease: "easeIn", duration: 2, type: "spring" }}
            >Hey, there</motion.h1>

            <p className={`text-center text-lg ${ubuntu_mono.className} mt-3`}>I'm your friendly neighborhood <span className='bg-gradient-to-r from-amber-300 to-lime-300 mt-7 text-black pt-0 pb-0 pr-1 pl-1 text-center font-semibold'>Techie</span></p>

            {/* CTA's */}

            <div className=' w-max ml-auto mr-auto flex items-center justify-center gap-10 mt-10'>

              {/* Resume */}

              <button className="px-8 py-2 rounded-full bg-gradient-to-b from-amber-400 to-amber-500 text-white focus:ring-2 focus:ring-amber-300 hover:shadow-xl transition duration-200 cursor-pointer">
                Resume
              </button>

              {/* Contact */}
              <div>
                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </span>
                  <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                    <span>
                      Contact Me
                    </span>
                    <svg
                      fill="none"
                      height="16"
                      viewBox="0 0 24 24"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.75 8.75L14.25 12L10.75 15.25"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className=' w-full md:h-[70vh] md:p-0 h-max bg-black marquee-sect' id='technologies'>
        <MyMarquee />
      </section>

      <section className=' w-screen overflow-x-hidden pt-10' id='stack'>
        <motion.h1
          className={`${inter.className} text-6xl text-center font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 opacity-0`}
          initial={{ opacity: 0, translateY: "50px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{ ease: "easeIn", duration: 2, type: "spring" }}
        >My Stack</motion.h1>

        <motion.p
          className={`${ubuntu_mono.className} text-lg text-center font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 opacity-0 mt-3`}
          initial={{ opacity: 0, translateY: "30px" }}
          whileInView={{ opacity: 1, translateY: "0px" }}
          transition={{ ease: "easeIn", duration: 2, type: "spring", delay: 0.5 }}
        >I'm a <span className='bg-gradient-to-r from-amber-300 to-lime-300 mt-7 text-black pt-0 pb-0 pr-1 pl-1 text-center font-semibold'>frontend</span> developer</motion.p>

        <div className=' w-screen overflow-x-hidden'>
          <StackBeams />
        </div>

        <motion.p
          className={`${ubuntu_mono.className} font-normal text-xl text-center md:p-0 pl-5 pr-5`}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, }}
          transition={{ ease: "easeIn", duration: 2, type: "spring", delay: 0.5 }}
        >I use with <span className='bg-gradient-to-r from-amber-300 to-lime-300 mt-7 text-black pt-0 pb-0 pr-1 pl-1 text-center font-semibold'>Next JS</span>  and other technologies to build fully dynamic and responsive web applications</motion.p>
      </section>

      <section className=' w-full h-screen md:p-32 md:pt-20 pl-5 pr-5 pt-20 relative' id='history'>

        {/* PArticles */}
        <Particles
          className="absolute inset-1"
          quantity={100}
          ease={80}
          color={"#ffffff"}
          refresh
        />

        <History />

      </section>

      <section id='projects' className='w-full md:p-32 md:pt-20 pl-10 pr-10 pt-10 relative'>
        <h1 className={`${inter.className} text-4xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 mb-10`}>Some of my projects</h1>


        {/* Projects */}
        <Suspense fallback={<span className="loading loading-bars loading-lg"></span>}>
          <Projects />
        </Suspense>

        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />

      </section>

      <section id='skills' className=' backdrop-blur-lg -backdrop-hue-rotate-90 w-full h-[70vh] md:p-32 md:pt-20 pl-10 pr-10 pt-10'>

        <h1>Skills</h1>

      </section>

    </div>
  )
}

export default page