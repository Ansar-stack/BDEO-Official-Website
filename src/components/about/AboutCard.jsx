import React from 'react'

const AboutCard = ({title, description, icon}) => {
  return (
    <div 
     data-aos="fade-up"
    data-aos-duration="800"
    className='w-[25rem] h-[230px] bg-blue-100/50  hover:-translate-y-1 hover:transition-transform hover:duration-300 rounded-md shadow-sm flex flex-col py-5 px-6 cursor-pointer'>
        <div className='w-10 h-10 bg-white rounded-full self-start flex items-center justify-center'>
          {icon}
        </div>
        <h3 className='text-xl font-bold text-zinc-900'>{title}</h3>
        <p className='text-gray-800'>{description}</p>
    </div>
  )
}

export default AboutCard