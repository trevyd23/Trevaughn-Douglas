"use client"
import React, { useState } from 'react'
import { PortfolioApplication } from './PortfolioSection'
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import AppleIcon from '../../public/assets/appleWhite.png'
import GooglePlay from '../../public/assets/googlePlay.png'
import Github from '../../public/assets/githubIcon.png'
import NPM from '../../public/assets/npm.png'

export const Card = ({ appImage, appLink, appName }: PortfolioApplication) => {
  const [hovered, setHovered] = useState(false)

  return (<>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className='w-[35rem] h-[35rem] bg-[#201f1f] rounded-xl m-6 flex-col items-center hidden md:flex relative'
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}>
      {hovered &&
        (<div className='h-full w-full bg-[#262626cc] flex items-center justify-center gap-10 px-3 flex-col  absolute top-0 left-0 right-0 bottom-0 z-20 rounded-lg'>
          <span className='text-3xl mt-2'>{appName}</span>
          {appName.includes('Drag-And-Drop') ?
        (<div className='flex flex-row w-[100%] justify-center'>
        <Link href={appLink[0]} className='flex flex-row items-center'>
          <Image src={NPM} alt='npmIcon' className='w-[30px] h-[30px]' />
          <span className='hover:text-[#306ec3] ml-5'>{`NPM >`}</span>
        </Link>
        <Link href={appLink[1]} className='flex flex-row items-center ml-5'>
          <Image src={Github} alt='githubIcon' className='w-[30px] h-[30px] bg-white rounded-lg' />
          <span className='hover:text-[#306ec3] ml-5'>{`GitHub >`}</span>
        </Link>
      </div>)
        : (<div className='flex flex-row w-[100%] justify-center '>
          <Link href={appLink[0]} className='flex flex-row items-center '>
            <Image src={AppleIcon} alt='appstoreLink' className='w-[30px] h-[30px]' />
            <span className='hover:text-[#306ec3] ml-5'>{`App Store >`}</span>
          </Link>
          <Link href={appLink[1]} className='flex flex-row items-center ml-5'>
            <Image src={GooglePlay} alt='appstoreLink' className='w-[30px] h-[30px]' />
            <span className='hover:text-[#306ec3] ml-5'>{`Play Store >`}</span>
          </Link>
        </div>)
      }
        </div>)}
      <Image src={appImage} alt='appImage' className='w-[100%] h-[100%] rounded-lg' />
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className={`w-[22rem] sm:w-[32rem] h-[30rem] bg-[#201f1f] rounded-xl m-20 flex flex-col items-center px-2 sm:px-5 md:hidden`}>
      <span className='text-3xl mt-2'>{appName}</span>

      {appName.includes('Drag-And-Drop') ?
        (<div className='flex flex-row w-[100%] justify-center mt-10'>
        <Link href={appLink[0]} className='flex flex-row items-center '>
          <Image src={NPM} alt='npmIcon' className='w-[30px] h-[30px]' />
          <span className='hover:text-[#306ec3] ml-5'>{`NPM >`}</span>
        </Link>
        <Link href={appLink[1]} className='flex flex-row items-center ml-5'>
          <Image src={Github} alt='githubIcon' className='w-[30px] h-[30px] bg-white rounded-lg' />
          <span className='hover:text-[#306ec3] ml-5'>{`GitHub >`}</span>
        </Link>
      </div>)


        : (<div className='flex flex-row w-[100%] justify-center mt-10'>
          <Link href={appLink[0]} className='flex flex-row items-center '>
            <Image src={AppleIcon} alt='appstoreLink' className='w-[30px] h-[30px]' />
            <span className='hover:text-[#306ec3] ml-5'>{`App Store >`}</span>
          </Link>
          <Link href={appLink[1]} className='flex flex-row items-center ml-5'>
            <Image src={GooglePlay} alt='appstoreLink' className='w-[30px] h-[30px]' />
            <span className='hover:text-[#306ec3] ml-5'>{`Play Store >`}</span>
          </Link>
        </div>)
      }
      <Image src={appImage} alt='appImage' className='w-[70rem] h-[20rem] rounded-lg mt-5 sm:mt-5 sm:w-[20rem] sm:h-[15rem]' />
    </motion.div>
  </>
  )
}
