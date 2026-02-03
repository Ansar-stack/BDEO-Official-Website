import React from 'react'

const ChallengesCard = ({ title, description, icon }) => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-duration="800"
      className="group px-4 py-6 sm:px-5 sm:py-7 
                w-full max-w-xs sm:max-w-sm md:max-w-[240px] lg:max-w-[260px]
                bg-white rounded-lg 
                flex flex-col items-center text-center gap-4
                transition-all duration-300 hover:-translate-y-0.5
                cursor-pointer
                border-2 border-gray-100
                hover:border-blue-300 hover:shadow-md
                shadow-sm"
    >
      {/* Icon with double border */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full 
                     bg-blue-50 flex items-center justify-center
                     border-2 border-blue-100
                     group-hover:border-blue-300
                     transition-colors duration-300">
        <div className="absolute inset-0 rounded-full border-2 border-white" />
        <div className="text-blue-600 relative z-10">
          {React.cloneElement(icon, {
            className: "w-6 h-6 sm:w-7 sm:h-7"
          })}
        </div>
      </div>

      {/* Title */}
      <h4 className="text-lg sm:text-xl font-semibold text-gray-900">
        {title}
      </h4>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>

      {/* Border-like divider */}
      <div className="w-16 h-0.5 bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200 
                     rounded-full"></div>
    </div>
  )
}

export default ChallengesCard