import React from 'react'
import ValueCard from './ValueCard';
import { HiOutlineGlobeAlt, HiOutlineHeart, HiOutlineUsers } from 'react-icons/hi';
const ValueSection = () => {
 const values = [
    {
      title: 'Collaboration',
      icon: <HiOutlineUsers size={22} className="text-sky-600" />,
      description: 'We believe that the best solutions come from working together, fostering open communication and teamwork.'
    },
    {
      title: 'Commitment',
      icon: <HiOutlineHeart size={22} className="text-rose-600" />,
      description: 'We stay dedicated to our mission and the people we serve, giving the extra mile.'
    },
    {
      title: 'Community',
      icon: <HiOutlineGlobeAlt size={22} className="text-teal-600" />,
      description: 'We build strong relationships that foster trust and mutual understanding.'
    }
  ];

  return (
    <section className="py-16 px-6 bg-sky-100/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Culture
          </h2>
          <p className="text-gray-600">
            We are united by shared values that define how we work together.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center">
          {values.map((value) => (
            <ValueCard
              key={value.title}
              title={value.title}
              icon={value.icon}
              description={value.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ValueSection