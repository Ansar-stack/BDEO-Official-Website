import React from 'react'

const CoreValuesCard = ({ title, description }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="group relative w-[250px] h-[130px] cursor-pointer
                bg-white border border-gray-100 hover:border-blue-200
                shadow-sm hover:shadow-lg
                rounded-lg p-4
                transition-all duration-300 ease-out
                hover:-translate-y-1
                before:absolute before:top-0 before:left-0 before:right-0 before:h-1
                before:bg-gradient-to-r before:from-blue-500 before:to-indigo-500
                before:rounded-t-lg
                before:transition-all before:duration-500
                before:origin-left before:scale-x-100
                hover:before:scale-x-0 group-hover:before:scale-x-100
                hover:before:origin-right"
    >
      {/* Title */}
      <h3 className="text-lg font-bold text-gray-900 mb-2
                    group-hover:text-blue-700 transition-colors duration-300">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 text-sm leading-relaxed
                   group-hover:text-gray-800 transition-colors duration-300">
        {description}
      </p>

      {/* Subtle background pattern on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100
                     transition-opacity duration-500">
        <div className="absolute top-2 right-2 w-10 h-10 rounded-full
                       bg-blue-100/20 blur-sm" />
        <div className="absolute bottom-2 left-2 w-8 h-8 rounded-full
                       bg-indigo-100/20 blur-sm" />
      </div>
    </div>
  )
}

export default CoreValuesCard