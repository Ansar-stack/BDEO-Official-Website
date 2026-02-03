import React from 'react'
import HeroSection from '../components/UI/HeroSection'
import AboutBDEO from '../components/about/AboutBDEO'
import OurStory from '../components/about/OurStory'
import VisionMission from '../components/about/VisionMission'
import OurCoreValues from '../components/about/OurCoreValues'
import BluePart from '../components/about/BluePart'

const About = () => {
  return (
    <>
      <HeroSection heading={'About Us'} description={'A dynamic, non-profit organization dedicated to addressing humanitarian needs in Afghanistan through education and sustainable development.'} />
      <div className='px-5'>
        <AboutBDEO />
        <OurStory />
      </div>
        <VisionMission />
        <OurCoreValues />
        <BluePart />
    </>
  )
}

export default About