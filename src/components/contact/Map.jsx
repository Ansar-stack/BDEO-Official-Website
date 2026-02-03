import React from 'react'

const Map = () => {
  return (
    <div className='w-full mt-10'>
      <iframe
        title="Kandahar Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217540.78506284824!2d65.31377574796298!3d31.57699751563878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ed671e79410956d%3A0x506f23b29538479b!2sDand%20Chowk%2C%20Kandahar%2C%20Afghanistan!5e0!3m2!1sen!2s!4v1770115437964!5m2!1sen!2s"
        className='w-full h-[300px] border-0'
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  )
}

export default Map
