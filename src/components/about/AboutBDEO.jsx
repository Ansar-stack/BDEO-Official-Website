import React from 'react'
import Logo from '../../assets/logo.jpg'
const AboutBDEO = () => {
  return (
    <div className='w-full flex flex-col items-center mt-7'>
        <img src={Logo} alt="BDEO Logo" className='w-35 h-35.25'/>
        <p className='text-zinc-900  w-full md:max-w-2xl text-center text-[18px]'>
           Bost Development and Educational Organization (BDEO) is a non-profit dedicated to addressing humanitarian needs in Afghanistan. We partner with communities to build resilience, self-reliance, and sustainable development for the future.
        </p>
    </div>
  )
}

export default AboutBDEO