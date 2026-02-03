const WhatWeDoCard = ({title, description, icon}) => {
  return (
    <div 
      data-aos="fade-up"
      data-aos-duration="800"
    className='flex flex-col gap-1.5 cursor-pointer hover:-translate-y-1 hover:transition-transform hover:duration-300 w-[350px] p-8 h-[330px]  border border-gray-200 shadow-sm'>
      <div className='w-10 h-10 bg-sky-100/50 rounded-md self-start flex items-center justify-center'>{icon}</div>
      <h2 className='text-blue-600 font-semibold text-xl'>{title}</h2>
      <p className='text-gray-800 text-sm'>{description}</p>
    </div>
  )
}

export default WhatWeDoCard