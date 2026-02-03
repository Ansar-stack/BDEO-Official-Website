import React from 'react'
import TeamCard from './TeamCard';
// Import the director image from assets folder 
import DirectorImage from '../../assets/DirectorImage.png';
const LeaderShipSection = () => {
    const leaders = [
    {
      name: 'DR. HABIIB RAHMAN AGHA',
      role: 'Board Director',
      img: DirectorImage,
      description: `Our Director, brings a wealth of experience from his advanced nursing background,
providing leadership with a deep understanding of health`
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide mb-2">
            Leadership
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Leadership Team
          </h2>
        </div>

        <div className="flex flex-wrap  justify-center">
          {leaders.map((leader) => (
            <TeamCard
              key={leader.name}
              name={leader.name}
              img={leader.img}
              role={leader.role}
              description={leader.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default LeaderShipSection