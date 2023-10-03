"use client"
import React from 'react'
import { motion } from "framer-motion"

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.4,
        },
    },
    end: {
        transition: {
            staggerChildren: 0.4,
        },
    },
}

const loadingCircleVariants = {
    start: {
        y: "0%",
    },
    end: {
        y: "100%",
    },
}

const loadingCircleTransition = {
    duration: 1.2,
    yoyo: Infinity,
    ease: "easeInOut",
}

export default function Loading() {
    return (
        <motion.div
            className='w-[20%] h-[25%] z-30 items-center justify-center flex  absolute top-[158rem] left-[35rem] right-0 bottom-0 flex-row bg-gray-500 py-10'
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
        >
            <motion.span
                className='text-white text-7xl font-mono'
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            >T</motion.span>
            <motion.span
                className='text-white text-7xl font-mono'
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            >D</motion.span>
            <motion.div
                className='w-2 border-4 border-[#306ec3] rounded-full mt-[11rem] '
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
        </motion.div>
    )
}
