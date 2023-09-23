"use client"
import React, { useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'

interface SkillInterface {
    percentage: number,
    label: string
}
export const Skill = ({ percentage, label }: SkillInterface) => {
    const [desiredVal, setDesiredValue] = useState(0)

    useEffect(() => {
        let timeOut:NodeJS.Timeout
        timeOut = setTimeout(() => {
            setDesiredValue(percentage)
        }, 300)
    }, [percentage])
    return (
        <div className='w-[6rem] h-[6rem] mx-8 my-5 flex flex-col items-center sm:w-[8rem] sm:h-[8rem]  '>
            <CircularProgressbar   value={desiredVal} text={`${percentage}%`}
              styles={buildStyles({
                // Rotation of path and trail, in number of turns (0-1)
                rotation: 0.25,
            
                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                strokeLinecap: 'butt',
            
                // Text size
                textSize: '16px',
            
                // How long animation takes to go from one percentage to another, in seconds
                pathTransitionDuration: 3,
            
                // Can specify path transition in more detail, or remove it entirely
                // pathTransition: 'none',
            
                // Colors
                pathColor: `rgba(48, 110, 195, ${percentage / 100})`,
                textColor: '#FFFFFF',
                trailColor: '#FFFFFF',
                backgroundColor: '#3e98c7'})}  />
                <span className='text-sm text-white mt-2 sm:text-lg'>{label}</span>
        </div>
    )
}
