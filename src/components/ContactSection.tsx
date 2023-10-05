"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { ZodError, ZodFormattedError, z } from 'zod'
import Loading from './Loading'
import { TailSpin } from 'react-loader-spinner'
import Notification from './Notification'
import {AiFillCheckCircle} from 'react-icons/ai'
import {BiSolidErrorAlt} from 'react-icons/bi'
import strings from '@/utilities/strings'

type FormState = {
    fullName: string,
        phoneNumber: string,
        email: string,
        message: string
}
export default function ContactSection() {
    const [formState, setFormState] = useState({
        fullName: '',
        phoneNumber: '',
        email: '',
        message: ''
    })
    const contactSchema = z.object({
        fullName: z.string({required_error: 'Please enter a name I can reach you with.'}).min(10, 'Please enter your full name.'),
        phoneNumber: z.string().regex(new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/), 'Please enter a valid phone number without any symbols.'),
        email: z.string().email(),
        message: z.string()
    })
    const [isLoading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [showNotification, setShowNotification] = useState(false)
    const [errors, setErrors] = useState<ZodFormattedError<FormState> | null>(null)


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
        contactSchema.parse(formState)
           const res = await fetch("/api/email", {
                method: "POST",
                body: JSON.stringify({ email: formState.email, message: formState.message, fullname: formState.fullName, phoneNumber: formState.phoneNumber }),
            })
            setLoading(false)
            setShowNotification(true)
            res.status === 200 ? setSuccess(true) : setSuccess(false)
        } catch (error) {
            if(error instanceof ZodError) {
                setErrors(error.format())
                setLoading(false)
                setSuccess(false)
                return
            }
            setLoading(false)
            setSuccess(false)
            setShowNotification(true)
        }


    }, [contactSchema, formState])


    return (
        <section className='w-screen h-max bg-black flex justify-center flex-col items-center px-5 '>
            {/* {isLoading && <Loading />} */}
            {showNotification && <Notification notificationToggle={setShowNotification} icon={success ? AiFillCheckCircle : BiSolidErrorAlt} message={success ? strings.successMessage : strings.errorMessage} status={success ? 'confirmation' : 'error'} />}
            <h1 className='header'>Get in touch</h1>

            <h2 className='text-white text-lg leading-10 text-justify px-5 mt-5 mb-6'>Feel free to send me a message. I look forward to working on our next great project together!</h2>

            <form className='w-[100%] h-[38rem] md:w-[80%] flex items-center justify-center flex-col bg-[#201f1f] px-5 rounded-2xl mb-10 md:h-[25rem] '>
                <h3 className='mt-10 text-lg text-white mb-5 md:mt-2'>Contact Form</h3>
                <div className='w-[100%] flex flex-col items-center justify-center md:flex-row md:justify-center md:px-2'>
                    <div className='flex flex-col w-full items-center'>
                    <input
                        type='text'
                        name='fullName'
                        onChange={(e) => {
                            handleTextChange(e)
                            setErrors(null)
                        }}
                        required
                        placeholder='Full Name'
                        className={`responsive-input w-[100%] text-white md:w-60 lg:w-[60%] ${errors?.fullName && 'border-red-500'}`}
                    />
                    {errors && errors.fullName && <span className='errorInputMessage'>{errors.fullName._errors[0]}</span> }
                    </div>

                    <div className='flex flex-col w-full items-center'>
                    <input
                        type='text'
                        name='phoneNumber'
                        onChange={(e) => {
                            handleTextChange(e)
                            setErrors(null)
                        }}
                        required
                        placeholder='Phone Number'
                        className={`responsive-input w-[100%] mt-5 text-white md:mt-3 md:w-64 lg:w-[60%] ${errors?.phoneNumber && 'border-red-500'}`}
                    />
                    {errors && errors.phoneNumber ? <span className='errorInputMessage'>{errors.phoneNumber._errors[0]}</span> : <div> </div>}
                    </div>
                </div>
                <div className='w-[100%] flex flex-col items-center justify-center md:flex-row md:justify-between md:px-2'>
                <div className='flex flex-col w-full items-center'>
                    <input
                        type='email'
                        name='email'
                        onChange={(e) => {
                            handleTextChange(e)
                            setErrors(null)
                        }}
                        required
                        placeholder='Email'
                        className={`responsive-input w-[100%] mt-5 text-white md:mt-0 md:w-60 lg:w-[60%] ${errors?.email && 'border-red-500'}`}
                        
                    />
                    {errors && errors.email ? <span className='errorInputMessage'>{errors.email._errors[0]}</span> : <div> </div>}
                    </div>
                    <div className='flex flex-col w-full items-center'>
                    <input
                        name="message"
                        onChange={(e) => {
                            handleTextChange(e)
                            setErrors(null)
                        }}
                        required
                        placeholder='Message'
                        className={`responsive-input w-[100%] text-white mt-5 md:mt-3 md:w-64 lg:w-[60%] ${errors?.message && 'border-red-500'}`}
                    />
                    {errors && errors.message ? <span className='errorInputMessage'>{errors.message._errors[0]}</span> : <div> </div>}
                    </div>
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
