import React from 'react'

const TeamCard = ({ name, role, description, img }) => {
  return (
    <div 
     data-aos="fade-up"
    data-aos-duration="800"
    className="flex flex-col items-center w-[19rem] h-[400px] shadow-sm rounded-md py-1.5">
      {/* Image placeholder */}
      <img src={img} className='w-full h-[250px] object-cover`' />
      <h3 className="text-lg font-bold text-gray-900 mb-0.5">{name}</h3>
      <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
        {role}
      </p>
      <p className="text-sm text-gray-600 leading-relaxed px-2  text-center">
        {description}
      </p>
    </div>
  );
}

export default TeamCard