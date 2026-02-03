import React from 'react'
import Button from '../UI/Button'
import farmerImage from '../../assets/FarmerImage.jpg'
const WhoWeAre = () => {
  return (
    <div className='w-full  md:h-[60vh] flex gap-5 px-2 sm:px-10 md:px-20'>
      {/* Content */}
    <div className='w-full md:w-1/2 flex flex-col gap-2 md:py-10'
     data-aos="fade-right"
  data-aos-duration="800"
    >
        <h2 className='font-bold text-sm text-blue-600 '>WHO WE ARE</h2>
        <h3 className='font-bold text-2xl md:text-3xl tracking-tight'>Building a Better Future Together</h3>
        <p className='text-justify'>
          Boost Development and Educational Orginization (BDEO) is a non-profit committed to upliftment. We don't 
            just provide aid, we partner with communities to build resilience, knowledge, and self-sufficiency for generation to come.
        </p>
        <Button text={'Read More About Us'} classes={'transparent-btn self-start mt-2'}/>
      </div>
      {/* Image */}
      <div className='w-1/2  hidden md:flex' data-aos="fade-left"
    data-aos-duration="800">
        <img src={farmerImage} alt="plant" className='w-full  rounded-xl inset-0  object-cover' />
      </div>  
    </div>
  )
}

export default WhoWeAre