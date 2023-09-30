"use client"
import React, { useState } from 'react'

export default function ContactSection() {
    const [formState, setFormState] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        message: ''
    })
    const [submitted, setSubmitted] = useState(false)


    const handleTextChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [e.target.name] : e.target.value
        })
    }

    return (<section className='w-screen h-max bg-black flex justify-center flex-col items-center px-5 '>
        <h1 className='header'>Get in touch</h1>

        <h2 className='text-white text-lg leading-10 text-justify px-5 mt-5 mb-6'>Feel free to send me a message. I look forward to working on our next great project together!</h2>

        <form className='w-[100%] h-[35rem] md:w-[80%] flex items-center justify-center flex-col bg-[#201f1f] px-5 rounded-2xl mb-10 md:h-[25rem] '>
            <h3 className='mt-10 text-lg text-white mb-5 md:mt-2'>Contact Form</h3>
            <div className='w-[100%] flex flex-col items-center justify-center md:flex-row md:justify-between md:px-5'>
            <input
                type='text'
                name='fullName'
                onChange={(e) => handleTextChange(e)}
                required
                placeholder='Full Name'
                className='responsive-input w-[100%] text-white md:w-60 lg:w-[40%]'
            />
            <input
                type='text'
                name='phoneNumber'
                onChange={(e) => handleTextChange(e)}
                required
                placeholder='Phone Number'
                className='responsive-input w-[100%] mt-5 text-white md:mt-3 md:w-60 lg:w-[40%]'
            />
            </div>
            <div className='w-[100%] flex flex-col items-center justify-center md:flex-row md:justify-between md:px-5'>
            <input
                type='email'
                name='email'
                onChange={(e) => handleTextChange(e)}
                required
                placeholder='Email'
                className='responsive-input w-[100%] mt-5 text-white md:mt-0 md:w-60 lg:w-[40%]'
            />
            <input
                name="message"
                onChange={(e) => handleTextChange(e)}
                required
                placeholder='Message'
                className='responsive-input w-[100%] text-white mt-5 md:mt-3 md:w-60 lg:w-[40%]'
            />
            </div>
            <button className=' mt-10 mb-5 hover:bg-cyan-600 w-36 text-white bg-[#306ec3] items-center justify-center rounded-lg h-11 lg:ml-8 xl:ml-11 text-xs font-medium order-1'>
                SUBMIT
            </button>
        </form>
    </section>
    )
}
