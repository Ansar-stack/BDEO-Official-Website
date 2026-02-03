import React from 'react'

const ContactCard = ({icon, title, desc1, desc2}) => {
  return (
    <div 
     data-aos="fade-up"
    data-aos-duration="800"
    className='w-[16rem] h-[170px] border border-gray-300 rounded-md p-5 flex flex-col gap-1 items-center'>
        <div className='p-2.5 rounded-full bg-blue-100/50 flex items-center justify-center'>
        {icon}</div>
        <span className='font-semibold text-xl text-zinc-900'>{title}</span>
        <a href={`tel:${desc1}`} className='text-gray-700 text-[18px]'>{desc1}</a>
        <span className='text-gray-700'>{desc2}</span>
    </div>
  )
}

export default ContactCard