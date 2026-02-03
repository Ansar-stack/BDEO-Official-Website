import React from 'react'
import HeroSection from '../components/UI/HeroSection'
import LeaderShipSection from '../components/team/LeaderShipSection'
import TeamMemberShip from '../components/team/TeamMemberShip'
import ValueSection from '../components/team/ValueSection'
import CTASection from '../components/team/CTASection'

const Team = () => {
  return (
    <>
        <HeroSection heading={'Our Team'} description={'Dedicated professionals with diverse skills and expertise working to create lasting positive change in Afghanistan.'}/>
        <LeaderShipSection />
        <TeamMemberShip />
        <ValueSection />
        <CTASection />
    </>
  )
}

export default Team