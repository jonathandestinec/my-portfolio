import React from 'react'


import { Ubuntu_Mono, Inter } from 'next/font/google'
import { motion } from "framer-motion"

const ubuntu_mono = Ubuntu_Mono({ weight: ["400", "700"], subsets: ["latin-ext"] })
const inter = Inter({ weight: ["400", "500", "600", "700", "800"], subsets: ["latin-ext"] })

function HistoryContent() {
    return (
        <div className=' md:ml-0 ml-5'>
            <motion.h1
                className={`${ubuntu_mono.className} text-6xl text-left font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500 opacity-0 ml-0 pl-0`}
                initial={{ opacity: 0, translateY: "50px" }}
                whileInView={{ opacity: 1, translateY: "0px" }}
                transition={{ ease: "easeIn", duration: 2, type: "spring" }}
            >Web Dev History</motion.h1>

            <motion.p
                className={`${inter.className} text-xl mt-7`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 2, type: "spring", delay: 0.7 }}

            ><span className={`${ubuntu_mono.className}`}>Sate</span>, I have been in the tech space for over <span className={`bg-gradient-to-r from-amber-300 to-lime-300 text-black pt-0 pb-0 pr-1 pl-1 text-center font-semibold`}>3 Years</span> now, and I'v been working with technologies like Next JS, React JS, Tailwind.css, and other web development technologies.</motion.p>

            <motion.p
                className={`${inter.className} text-xl mt-7`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 2, type: "spring", delay: 1 }}
            >
                I build web applications that are very scalable and dynamic, allowing them to work on different platforms and with high performance
            </motion.p>

            <motion.p
                className={`${inter.className} text-xl mt-7`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ ease: "easeIn", duration: 2, type: "spring", delay: 1.5 }}
            >
                Look at some of my projects of whom I am proud of (and have been deployed 😑)
            </motion.p>

            <div className=' w-full flex items-center justify-end'>
                <a href="#projects">
                    <motion.i
                        className="fi fi-rr-arrow-right text-3xl"
                        initial={{ opacity: 0, translateX: "-20px" }}
                        whileInView={{ opacity: 1, translateX: "0px" }}
                        transition={{ ease: "easeIn", duration: 2, type: "spring", delay: 2 }}
                    ></motion.i>

                </a>
            </div>
        </div>
    )
}

export default HistoryContent