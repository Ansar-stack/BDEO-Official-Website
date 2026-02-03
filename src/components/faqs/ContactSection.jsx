import React from 'react'
import Button from '../UI/Button'
import {useNavigate} from 'react-router-dom'
const ContactSection = () => {
    const navigate = useNavigate()
  return (
    <div className='w-full flex flex-col items-center py-7 md:py-10 bg-blue-100/50 mt-10 gap-2'>
        <h5 className='font-bold text-black text-2xl md:text-3xl'>Didn't find your answer?</h5>
        <p className='text-gray-700 text-center px-1'>Our team is here to help with any other questions you may have.</p>
        <Button text={'Contact Us'} classes={'primary-btn'} onClick={()=>navigate('/contact-us')}/>
    </div>
  )
}

export default ContactSection