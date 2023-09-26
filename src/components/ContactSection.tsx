import React from 'react'

export default function ContactSection() {
    return (<section className='w-screen h-max bg-black flex justify-center flex-col items-center px-5 '>
        <h1 className='header'>Get in touch</h1>

        <h2 className='text-white text-lg leading-10 text-justify px-5 mt-5 mb-6'>Feel free to send me a message. I look forward to working on our next great project together!</h2>

        <form className='w-[100%] h-[40rem] md:w-[70%] flex items-center justify-center flex-col bg-[#201f1f] px-5 rounded-2xl '>
            <div className='w-[100%] flex flex-row items-center justify-between mt-8'>
                <input
                    type='text'
                    name='firstName'
                    required
                    placeholder='First Name'
                    className='responsive-input'
                />
                <input
                    type='text'
                    name='lastName'
                    required
                    placeholder='Last Name'
                    className='responsive-input'
                />
            </div>
            <input
                type='email'
                name='email'
                required
                placeholder='Email'
                className='responsive-input w-[20rem] mt-10 '
            />
            <textarea
                name="message"
                rows={10}
                cols={40}
                placeholder='Enter Message Here'
                className='bg-transparent mt-10 border-2 rounded-3xl text-white px-5 py-5 border-white'
            />
        </form>
        <button className=' mt-10 hover:bg-cyan-600 w-36 text-white bg-[#306ec3] items-center justify-center rounded-lg h-11 lg:ml-8 xl:ml-11 text-xs font-medium order-1'>
            SUBMIT
        </button>
    </section>
    )
}
