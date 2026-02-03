import React from 'react'

const AboutCard = ({ title, description, icon }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="group relative w-[25rem] h-[260px] bg-gradient-to-br from-blue-50 via-white to-indigo-50
                hover:-translate-y-2 transition-all duration-500 ease-out
                rounded-xl shadow-sm hover:shadow-2xl cursor-pointer
                border border-blue-100 hover:border-blue-200
                flex flex-col py-6 px-7 overflow-hidden
                before:absolute before:inset-0 before:bg-gradient-to-br before:from-blue-500/0 before:via-indigo-500/0 before:to-purple-500/0
                before:transition-all before:duration-500 before:ease-out
                hover:before:from-blue-500/5 hover:before:via-indigo-500/3 hover:before:to-purple-500/2"
    >
      {/* Animated background elements */}
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br from-blue-100/40 to-indigo-100/30
                     blur-xl group-hover:scale-150 group-hover:opacity-60 transition-all duration-700 ease-out" />
      <div className="absolute -left-10 -bottom-10 w-40 h-40 rounded-full bg-gradient-to-tr from-purple-100/30 to-pink-100/20
                     blur-xl group-hover:scale-150 group-hover:opacity-50 transition-all duration-700 ease-out delay-150" />

      {/* Icon container with enhanced animation */}
      <div className="relative z-10 w-14 self-start h-14  bg-gradient-to-br from-white to-blue-50 rounded-full 
                     flex items-center justify-center mb-5 shadow-md
                     border border-blue-100 group-hover:border-blue-300
                     transition-all duration-500 ease-out
                     group-hover:scale-110 group-hover:shadow-lg
                     group-hover:bg-gradient-to-br group-hover:from-blue-50 group-hover:to-white
                     before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-blue-500/0 before:to-indigo-500/0
                     before:transition-all before:duration-500 before:ease-out
                     group-hover:before:from-blue-500/20 group-hover:before:to-indigo-500/10">
        <div className="text-blue-600 group-hover:text-blue-700 transition-colors duration-500 
                       group-hover:scale-105 w-6 h-6 flex items-center justify-center rounded-full">
          {React.cloneElement(icon, {
            className: "w-6 h-6 transition-all duration-500"
          })}
        </div>
      </div>

      {/* Content */}
      <h3 className="relative z-10 text-2xl font-bold text-gray-900 mb-3 
                    group-hover:text-blue-800 transition-colors duration-500
                    bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 bg-clip-text text-transparent
                    group-hover:from-blue-700 group-hover:via-indigo-700 group-hover:to-purple-700">
        {title}
      </h3>

      <p className="relative z-10 text-gray-700 leading-relaxed flex-1 
                   group-hover:text-gray-800 transition-colors duration-500
                   group-hover:translate-x-1">
        {description}
      </p>

      {/* Animated bottom line */}
      <div className="relative z-10 mt-4 w-16 h-1 bg-gradient-to-r from-blue-400 to-indigo-400 
                     rounded-full transform origin-left scale-x-0 
                     group-hover:scale-x-100 transition-transform duration-700 ease-out" />

      {/* Floating particles effect (optional) */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-blue-300/30
                      opacity-0 group-hover:opacity-100
                      transition-all duration-1000 ease-out"
            style={{
              left: `${20 + i * 30}%`,
              top: `${30 + i * 15}%`,
              animation: `float ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default AboutCard


