import React from 'react'

export default function ContactSection() {
    return (<section className='w-screen h-max bg-black flex justify-center flex-col items-center px-5 '>
        <h1 className='header'>Get in touch</h1>
      
            <form className='w-[100%]'>
                <div className='w-[100%] flex flex-row items-center justify-between'>
                    <input
                        type='email'
                        name='email'
                        autoComplete='email'
                        required
                        placeholder='First Name'
                        className='rounded-md'
                    />
                     <input
                        id='frm-email'
                        type='email'
                        name='email'
                        autoComplete='email'
                        required
                        placeholder='First Name'
                        className='rounded-md'
                    />
                    </div>
            </form>
        {/* <form className='w-[70%] h-max bg-[#201f1f] text-white items-center justify-center flex flex-col  shadow-lg shadow-cyan-600 mt-20'>
   
 
    <div className='flex flex-col'>
      <label htmlFor='frm-phone'>Phone</label>
      <input
        id='frm-phone'
        type='text'
        name='phone'
        autoComplete='tel'
        required
      />
    </div>
    <div className='flex flex-row justify-between'>
      <div>
        <label htmlFor='frm-first'>First Name</label>
        <input
          id='frm-first'
          type='text'
          name='first'
          autoComplete='given-name'
          required
        />
      </div>
      <div>
        <label htmlFor='frm-last'>Last Name</label>
        <input
          id='frm-last'
          type='text'
          name='last'
          autoComplete='family-name'
          required
        />
      </div>
    </div>
    <div className='flex flex-col'>
      <label htmlFor='frm-message'>Message</label>
      <textarea id='frm-message' rows={6} name='message'></textarea>
    </div>
    <div className='flex flex-col'>
      <button type='submit'>Submit</button>
    </div>
  </form> */}
    </section>
    )
}
