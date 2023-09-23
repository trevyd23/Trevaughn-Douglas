"use client"
import { PortfolioSection } from '@/components/PortfolioSection'
import strings from '@/utilities/strings'
import { TypeAnimation } from 'react-type-animation'
import { motion } from "framer-motion"
import Me from '../../public/assets/me.jpg'
import GitHub from '../../public/assets/githubIcon.png'
import LinkedIn from '../../public/assets/linkedin.png'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (<>
    <div className='w-screen h-max flex bg-black flex-col  px-6 pt-3 md:px-24 md:pt-56'>
      <motion.div className='w-full mt-6' 
      initial={{x: 0, opacity: 0}} 
      animate={{x: 10, opacity: 1}}
      transition={{duration: 0.5}}
      >
      <div className='w-20 border-4 border-[#306ec3] mb-6'></div>
      <span className='text-white md:text-lg'>Hello, my name is</span>
      <h1 className='font-semibold text-white text-3xl md:text-5xl leading-relaxed md:w-[40%] md:leading-normal '>
        Trevaughn Douglas
      </h1>
      <span className='text-white md:text-lg'>Full Stack Devloper</span>
      <div className='w-30 flex items-center flex-row mt-5'>
        <Link href={'https://github.com/trevyd23'}>
        <Image src={GitHub} alt='Github' className='w-[30px] h-[30px] bg-white rounded-lg' />
        </Link>
        <Link href={'https://www.linkedin.com/in/trevaughn-douglas-640336120/'}>
        <Image src={LinkedIn} alt='LinkedIn' className='w-[30px] h-[30px] bg-white rounded-lg ml-5' />
        </Link>

      </div>
      </motion.div>
      <motion.div className='items-center justify-between mt-8 flex-row flex md:self-end md:mt-[-200px]'
      initial={{x: 100, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      transition={{ duration: 0.5 }}
      >
      <Image src={Me} alt='graduation' className='w-[180px] h-[180px] md:w-[300px] md:h-[300px] rounded-full self-end order-2 border-[0.4rem] border-white' />
      <button className='self-start mt-20 hover:bg-cyan-600 w-36 text-white bg-[#306ec3] items-center justify-center rounded-lg h-11 lg:ml-8 xl:ml-11 md:hidden text-xs font-medium order-1'>
          <a href="/Resume.docx" download="Trevaughn Douglas">Download Resume</a>
        </button>
        </motion.div>
      {/* <TypeAnimation
      className='mt-20 bg-slate-500'
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'FrontEnd',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'BackEnd',
        1000,
        'DevOps',
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block', color: 'white', }}
      repeat={Infinity}
    /> */}
      {/* <Image src={Blob} alt='Blob' className='w-[500px] h-[500px]' />
      <Image src={me} alt="Profile" className='w-32 h-32 md:w-16 md:h-16 absolute top-[550px] ' /> */}
      
     </div>
     <PortfolioSection />
     </>
  )
}

export default Home