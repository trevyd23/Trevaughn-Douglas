"use client"
import React, { useEffect } from 'react'
import { IconType } from 'react-icons'
import { MdClear } from 'react-icons/md'
import { AnimatePresence, motion } from "framer-motion"

type Props = {
    message: string,
    status: 'confirmation' | 'error' | 'warning',
    icon: IconType,
    notificationToggle: React.Dispatch<React.SetStateAction<boolean>>,
    showNotification: boolean
}

export default function Notification({ message, status, icon, notificationToggle, showNotification }: Props) {
    useEffect(() => {
        let timer: NodeJS.Timer

        timer = setTimeout(() => {
            notificationToggle(false)
        }, 5000)
        return () => clearTimeout(timer)
    }, [notificationToggle])


    return (<AnimatePresence>
        {showNotification && (
            <motion.div
                initial={{ x: 0, opacity: 0 }}
                animate={{ x: 10, opacity: 1 }}
                transition={{ duration: 0.3 }}
                exit={{ x: 0, opacity: 0 }}
                className=' w-[22rem] h-[5rem] sm:w-[22rem] sm:h-[4rem] flex flex-row z-30 absolute top-[260rem] left-1 sm:top-[255rem] md:top-[195rem] lg:top-[180rem] sm:left-5  px-5 border-l-0'
            >
                <div className={`w-[.35rem] h-full border ${status === 'confirmation' ? 'bg-green-700' : 'bg-red-600'} rounded-md flex z-10 absolute left-[1.26rem] `} />
                <div className='flex flex-row bg-white items-center px-8 border-l-0 rounded-r-xl'>
                    {icon({ color: `${status === 'confirmation' ? 'green' : 'red'}`, size: '30px' })}
                    <div className='items-center justify-center flex flex-col ml-4'>
                        <span className='text-base text-gray-600 font-bold self-start'>{status === 'confirmation' ? 'Success' : 'Error'}</span>
                        <div className='text-xs text-gray-500' >{message}</div>
                    </div>
                </div>
                <MdClear onClick={() => notificationToggle(false)} className='text-gray-700 absolute top-5 right-7 text-xl cursor-pointer hover:bg-slate-200 rounded-full' />

            </motion.div>)}
    </AnimatePresence>
    )
}
