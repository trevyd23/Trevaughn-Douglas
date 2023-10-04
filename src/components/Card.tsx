import React from 'react'
import { PortfolioApplication } from './PortfolioSection'
import { motion } from "framer-motion"
import Image from 'next/image'
import Link from 'next/link'
import AppleIcon from '../../public/assets/appleWhite.png'
import GooglePlay from '../../public/assets/googlePlay.png'

export const Card = ({ appImage, appLink, appName, appDescription }: PortfolioApplication) => {
  return (<>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9}}
      className='w-[35rem] h-[35rem] bg-[#201f1f] rounded-xl m-6 flex-col items-center px-5 hidden md:flex'>
      <span className='text-3xl mt-4'>{appName}</span>
      <Image src={appImage} alt='appImage' className='w-[150px] h-[150px] rounded-lg mt-6' />
      <p className='leading-5 mt-5 text-sm text-justify'>{appDescription}</p>
      <div className='flex flex-row w-[100%] justify-center'>
        <Link href={appLink[0]} className='flex flex-row items-center m-5'>
          <Image src={AppleIcon} alt='appstoreLink' className='w-[25px] h-[25px]' />
          <span className='hover:text-[#306ec3] ml-5 text-sm'>{`App Store >`}</span>
        </Link>
        <Link href={appLink[1]} className='flex flex-row items-center'>
          <Image src={GooglePlay} alt='playstoreLink' className='w-[25px] h-[25px]' />
          <span className='hover:text-[#306ec3] ml-5 text-sm'>{`Play Store >`}</span>
        </Link>
      </div>
    </motion.div>
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.9 }}
      className={`w-[22rem] sm:w-[32rem] ${appName.includes('UCarry') ? 'h-[33rem]' : 'h-[39rem]'} bg-[#201f1f] rounded-xl m-20 flex flex-col items-center px-2 sm:px-5 md:hidden`}>
      <span className='text-3xl mt-2'>{appName}</span>
      <p className='leading-5 mt-2 text-sm  mb-3 sm:mt-8 sm:text-base'>{appDescription}</p>
      <div className='flex flex-row w-[100%] justify-center m-1'>
        <Link href={appLink[0]} className='flex flex-row items-center '>
          <Image src={AppleIcon} alt='appstoreLink' className='w-[30px] h-[30px]' />
          <span className='hover:text-[#306ec3] ml-5'>{`App Store >`}</span>
        </Link>
        <Link href={appLink[1]} className='flex flex-row items-center ml-5'>
          <Image src={GooglePlay} alt='appstoreLink' className='w-[30px] h-[30px]' />
          <span className='hover:text-[#306ec3] ml-5'>{`Play Store >`}</span>
        </Link>
      </div>
      <Image src={appImage} alt='appImage' className='w-[70rem] h-[20rem] rounded-lg mt-3 sm:mt-5 sm:w-[20rem] sm:h-[15rem]' />
    </motion.div>
  </>
  )
}
