"use client"
import React, { useEffect, useRef, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import { motion } from "framer-motion"

interface SkillInterface {
    percentage: number,
    label: string
}
export const Skill = ({ percentage, label }: SkillInterface) => {
    const [desiredVal, setDesiredValue] = useState(0)

    useEffect(() => {
        let timeOut: NodeJS.Timeout
        timeOut = setTimeout(() => {
            setDesiredValue(percentage)
        }, 1000)
        return () => clearTimeout(timeOut)
    }, [percentage])


    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.9 }}
            className={`w-[6rem] h-[6rem] mx-8 my-5 flex flex-col items-center sm:w-[8rem] sm:h-[8rem]`}>
            <CircularProgressbar value={desiredVal} text={`${percentage}%`}
                styles={buildStyles({
                    rotation: 0.25,
                    strokeLinecap: 'butt',
                    textSize: '16px',
                    pathTransitionDuration: 3,
                    pathColor: `rgba(48, 110, 195, ${percentage / 100})`,
                    textColor: '#FFFFFF',
                    trailColor: '#FFFFFF',
                    backgroundColor: '#3e98c7'
                })} />
            <span className='text-sm text-white mt-2 sm:text-lg'>{label}</span>
        </motion.div>
    )
}
