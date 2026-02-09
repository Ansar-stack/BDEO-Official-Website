import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'

const WhatsAppIcon = () => {
  return (
 <a
      href="https://wa.me/93700070442"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className='cursor-pointer'
    >
      <div
        className="fixed right-2 md:right-10 top-[80%] p-2 hover:animate-none rounded-xl animate-bounce bg-[#57f06d] flex items-center justify-center"
      >
        <FaWhatsapp size={45} color="white" />
      </div>
    </a>
  )
}

export default WhatsAppIcon