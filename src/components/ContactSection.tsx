"use client"
import React, { useCallback, useState } from 'react'
import Loading from './Loading'
import { TailSpin } from 'react-loader-spinner'
import Notification from './Notification'
import {AiFillCheckCircle} from 'react-icons/ai'
import {BiSolidErrorAlt} from 'react-icons/bi'
import strings from '@/utilities/strings'

export default function ContactSection() {
    const [formState, setFormState] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        message: ''
    })
    const [isLoading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [showNotification, setShowNotification] = useState(true)


    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = useCallback(async (e: React.MouseEvent) => {
        e.preventDefault()
        setLoading(true)
        try {
           const res = await fetch("/api/email", {
                method: "POST",
                body: JSON.stringify({ email: formState.email, message: formState.message, fullname: formState.fullName, phoneNumber: formState.phoneNumber }),
            })
            setLoading(false)
            setShowNotification(true)
            res.status === 200 ? setSuccess(true) : setSuccess(false)
        } catch (error) {
            setLoading(false)
            setSuccess(false)
            setShowNotification(true)
        }


    }, [formState.email, formState.fullName, formState.message, formState.phoneNumber])


    return (
        <section className='w-screen h-max bg-black flex justify-center flex-col items-center px-5 '>
            {/* {isLoading && <Loading />} */}
            {showNotification && <Notification notificationToggle={setShowNotification} icon={success ? AiFillCheckCircle : BiSolidErrorAlt} message={success ? strings.successMessage : strings.errorMessage} status={success ? 'confirmation' : 'error'} />}
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
                        className='responsive-input w-[100%] mt-5 text-white md:mt-3 md:w-64 lg:w-[42%]'
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
                        className='responsive-input w-[100%] text-white mt-5 md:mt-3 md:w-64 lg:w-[42%]'
                    />
                </div>
                <button className={`mt-10 mb-5 ${ !isLoading && 'hover:bg-cyan-600'} w-36 text-white bg-[#306ec3] items-center justify-center rounded-lg h-11 text-xs font-medium order-1 `} disabled={isLoading} onClick={(e) => { isLoading ? () => {} : handleSubmit(e)}}>
                    {isLoading ? <TailSpin
                        height="35"
                        width="35"
                        color="#ffffff"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                        wrapperStyle={{ marginLeft: '50px'}}
                        wrapperClass=""
                        visible={true}
                    /> : 'SUBMIT'}
                </button>
            </form>
        </section>
    )
}
