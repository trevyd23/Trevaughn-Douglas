import React from 'react'
import { PortfolioApplication } from './PortfolioSection'
import Image from 'next/image'
import Link from 'next/link'
import AppleIcon from '../../public/assets/appleWhite.png'
import GooglePlay from '../../public/assets/googleplay.png'

export const Card = ({appImage, appLink, appName, appDescription }:PortfolioApplication) => {
  return (
    <div className='w-[30rem] h-[30rem] bg-[#201f1f] rounded-lg m-6 flex flex-col items-center px-5'>
      <span className='text-3xl'>{appName}</span>
      <Image src={appImage} alt='appImage' className='w-[150px] h-[150px] rounded-lg mt-6' />
      <p className='leading-5 mt-5 text-sm text-justify'>{appDescription}</p>
      <div className='flex flex-row w-[100%] justify-center'>
      <Link href={appLink[0]} className='flex flex-row items-center m-5'>
      <Image src={AppleIcon} alt='appstoreLink' className='w-[30px] h-[30px]' />
      <span className='hover:text-[#306ec3] ml-5'>{`App Store >`}</span>
      </Link>
      <Link href={appLink[1]} className='flex flex-row items-center'>
      <Image src={GooglePlay} alt='appstoreLink' className='w-[30px] h-[30px]' />
      <span className='hover:text-[#306ec3] ml-5'>{`Play Store >`}</span>
      </Link>
      </div>
      </div>
  )
}
