import React from 'react'

const UNDGSCard = ({title, icon, className}) => {
  return (
    <div className={`w-20 mx-2 flex flex-col items-center h-20 rounded-md justify-center px-1 ${className}`}>
        <span className='text-white'>{icon}</span>
        <span className='text-sm text-white text-center tracking-tighter leading-tight'>{title}</span>
    </div>
  )
}

export default UNDGSCard