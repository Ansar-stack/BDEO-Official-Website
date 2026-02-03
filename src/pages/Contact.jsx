import React from 'react'
import HeroSection from '../components/UI/HeroSection'
import ContactCard from '../components/contact/ContactCard'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'
import ContactForm from '../components/contact/ContactForm'
import Map from '../components/contact/Map'
import LoveToHear from '../components/contact/LoveToHear'
const cardData = [{ title: "Phone Number", desc1: "+930703634592", desc2: "Mon-Fri 9am-Smp EST", icon: <FaPhone color='blue'/>}, { title: "Email Address", desc1: "bdeo.af@gmail.com",  icon: <FaEnvelope color='blue' />}, { title: "Physical Address", desc1: "Dand Chowk, 10 Floor", desc2: "Kandahar Afghanistan", icon: <FaMapMarkedAlt color='blue'/> }]
const Contact = () => {
    return (
        <>
            <HeroSection heading={'Contact Us'} description={'Get in Touch With Boast Development and Educational Organization'} />
            {/* Card Section */}
            <div className='my-5 w-full flex flex-wrap items-center justify-center gap-4'>
                {cardData.map((elem, index)=>(
                    <ContactCard title={elem.title} icon={elem.icon} desc1={elem.desc1} desc2={elem.desc2} key={index}/>
                ))}
            </div>
            {/* Form Section */}
            <div className='my-10 px-2 w-full flex justify-center'>
                <ContactForm />
            </div>
            <Map />
            <LoveToHear />
        </>
    )
}

export default Contact