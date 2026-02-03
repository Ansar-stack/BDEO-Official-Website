import React from 'react'

const ValueCard = ({ title, description, icon }) => {
   return (
    <div className="text-center px-6 w-[300px] flex flex-col">
      <div className='w-10 h-10 bg-white rounded-full flex items-center justify-center self-center'>{icon}</div>
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600 leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default ValueCard