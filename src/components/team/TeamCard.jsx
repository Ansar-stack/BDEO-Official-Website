import React from 'react'

const TeamCard = ({ name, role, description, img }) => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-duration="800"
      className="group relative flex flex-col bg-white items-center w-full max-w-xs sm:max-w-sm md:max-w-md lg:w-[19rem] xl:w-[20rem] 
                h-auto min-h-[360px] sm:min-h-[380px] md:min-h-[400px] p-4 sm:p-5 md:p-6
                rounded-xl border border-gray-200 shadow-sm hover:shadow-lg
                transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue-200"
    >
      {/* Top accent line on hover */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 
                     transform origin-left scale-x-0 transition-transform duration-300 
                     group-hover:scale-x-100" />

      {/* Image container */}
      <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-4 sm:mb-5 md:mb-6 
                     overflow-hidden rounded-full border-4 border-white shadow-md">
        <img 
          src={img} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 
                     group-hover:scale-105"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 text-center mb-2 
                    group-hover:text-blue-700 transition-colors duration-300">
        {name}
      </h3>
      
      {/* Role */}
      <div className="mb-3 sm:mb-4">
        <p className="text-xs sm:text-sm font-semibold text-blue-600 uppercase tracking-wide 
                     text-center px-4">
          {role}
        </p>
        {/* Role underline */}
        <div className="mt-1 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 
                       rounded-full mx-auto opacity-0 group-hover:opacity-100 
                       transition-opacity duration-300" />
      </div>

      {/* Description */}
      <div className="px-2 sm:px-3 w-full flex-1">
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center 
                     line-clamp-4 group-hover:text-gray-800 transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Bottom accent line */}
      <div className="mt-4 sm:mt-5 md:mt-6 w-16 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 
                     rounded-full opacity-0 group-hover:opacity-100 
                     transition-opacity duration-500" />
    </div>
  )
}

export default TeamCard