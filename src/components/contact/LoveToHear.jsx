import React from 'react'
import Button from '../UI/Button'
import {useNavigate} from 'react-router-dom'
const LoveToHear = () => {
  return (
    <div className='w-full py-10 flex flex-col items-center'>
        <h5 className='text-xl md:text-2xl xl:text-[2.3vw] font-semibold'>We'd love to hear from you</h5>
        <p className='text-gray-700'>You support helps us reach more communities in need.</p>
        <Button classes={'primary-btn mt-3'} text={<a href="#contact-form">Contact Us</a>}/>
    </div>
  )
}

export default LoveToHear