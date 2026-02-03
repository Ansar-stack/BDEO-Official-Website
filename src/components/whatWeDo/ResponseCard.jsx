import React from 'react'

const ResponseCard = ({color = "white", title, description }) => {
  return (
    <div 
         data-aos="fade-up"
    data-aos-duration="800"
    className='bg-[#f8fafc] rounded-md p-5 cursor-pointer hover:-translate-y-1 hover:transition-transform hover:duration-300 shadow-sm flex flex-col gap-2 w-[22rem] border-l-4 border-l-blue-600'>
        <div style={{backgroundColor: color}} className={`p-5 rounded-full self-start`}></div>
        <h3 className='text-lg font-semibold text-black'>{title}</h3>
        <p className='text-sm text-gray-600'>{description}</p>
    </div>
  )
}

export default ResponseCard