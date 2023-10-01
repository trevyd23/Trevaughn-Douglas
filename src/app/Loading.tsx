"use client"
import React from 'react'
import { motion } from "framer-motion"

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.2,
        },
    },
    end: {
        transition: {
            staggerChildren: 0.2,
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
    duration: 0.5,
    yoyo: Infinity,
    ease: "easeInOut",
}

export default function Loading() {
    return (
        <motion.div
            className='w-full h-full z-30 items-center justify-center flex bg-black'
            variants={loadingContainerVariants}
            initial="start"
            animate="end"
        >
            <motion.span
                className='text-white text-3xl font-mono'
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            >T</motion.span>
            <motion.span
                className='text-white text-3xl font-mono'
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            >D</motion.span>
            <motion.div
                className='w-2 border-4 border-[#306ec3] rounded-full mt-5'
                variants={loadingCircleVariants}
                transition={loadingCircleTransition}
            />
        </motion.div>
    )
}
