import React from 'react'
import Hero from '../components/home/Hero'
import WhoWeAre from '../components/home/WhoWeAre'
import WhatWeDo from '../components/home/WhatWeDo'
import ChallengesWeTackle from '../components/home/ChallengesWeTackle'
import UNDGS from '../components/home/UNDGS'
import WhatsAppIcon from '../components/home/WhatsAppIcon'
const Home = () => {
  return (
    <div className='overflow-x-hidden'>
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <ChallengesWeTackle />
      <UNDGS />
      <WhatsAppIcon />
    </div>
  )
}

export default Home