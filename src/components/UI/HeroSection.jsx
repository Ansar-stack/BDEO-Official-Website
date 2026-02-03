import React from 'react'

const HeroSection = ({heading, description}) => {
  return (
    <div className='w-full py-8 sm:py-10 bg-blue-100/50 flex flex-col items-center'>
        <h1 className='font-bold text-2xl text-center sm:text-3xl md:text-[2.7vw] text-zinc-900'>{heading}</h1>
        <p className='text-gray-700 max-w-sm text-sm text-center mt-2 md:text-xl md:max-w-2xl'>
            {description}
        </p>
    </div>
  )
}
export default HeroSection