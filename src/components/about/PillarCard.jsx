import React from 'react'

const PillarCard = ({ title, description, icon }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="group relative w-[21rem] h-[200px] cursor-pointer
                bg-white border border-gray-200 hover:border-blue-300
                rounded-xl shadow-md hover:shadow-xl
                flex flex-col items-center p-5
                transition-all duration-300 ease-out
                hover:-translate-y-1"
    >
      {/* Icon with smooth hover effect - NOW ROUNDED-FULL */}
      <div className="w-12 h-12 mb-4 rounded-full 
                     bg-gradient-to-br from-blue-50 to-indigo-50
                     flex items-center justify-center
                     border border-blue-100
                     transition-all duration-300 ease-out
                     group-hover:scale-110 group-hover:shadow-md
                     group-hover:bg-gradient-to-br group-hover:from-blue-100 group-hover:to-indigo-100">
        <div className="text-blue-600 group-hover:text-blue-700 
                       transition-colors duration-300">
          {React.cloneElement(icon, {
            className: "w-5 h-5"
          })}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-2
                    group-hover:text-blue-700 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm text-center leading-relaxed flex-1
                   group-hover:text-gray-800 transition-colors duration-300">
        {description}
      </p>

      {/* Simple hover indicator */}
      <div className="mt-3 w-0 h-0.5 bg-blue-500 rounded-full
                     group-hover:w-8 transition-all duration-500 ease-out" />
    </div>
  )
}

export default PillarCard