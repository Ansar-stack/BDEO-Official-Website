import React from 'react'
import FaqsSection from '../components/faqs/FaqsSection'
import ContactSection from '../components/faqs/ContactSection'
import HeroSection from '../components/UI/HeroSection'

const Faqs = () => {
  return (
    <>
      <HeroSection heading={'Frequently Asked Questions'} description={`Find the answers to common questions about BDEO's mission projects, and how you get involved.`}/>
      <FaqsSection />
      <ContactSection />
    </>
  )
}

export default Faqs