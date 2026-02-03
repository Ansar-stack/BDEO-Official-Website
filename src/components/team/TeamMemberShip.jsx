import React from 'react'
import TeamCard from './TeamCard';
import Sir from '../../assets/Sir-Image.png'
import TeamP1 from '../../assets/Team.png'
import Team2 from '../../assets/team2.jpg'
const TeamMemberShip = () => {
 const members = [
    {
      name: 'Hikmatullah Hakimi',
      role: 'Executive Director',
      img: Sir,
      description: 'Hikmatullah leads our organization with vision and dedication, guiding our mission forward.'
    },
    {
      name: 'Bismillah Salihi',
      img: TeamP1,
      role: 'Finance Image',
      description: 'Bismillah manages our financial resources, ensuring transparency and sustainability in all our operations.'
    },
    {
      name: 'Ahmmad Shah',
      img: Team2,
      role: 'HR Manager',
      description: 'Ahmmad manages our human resources, ensuring a supportive and inclusive workplace for all team members.'
    }
  ];

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Our Team Members
          </h2>
          <p className="text-gray-600">
            The passionate individuals driving change on the ground every single day.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {members.map((member) => (
            <TeamCard
              img={member.img}
              key={member.name}
              name={member.name}
              role={member.role}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamMemberShip