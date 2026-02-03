import React from 'react'
import ProblemCard from './ProblemCard'

const problems = [
  {
    title: 'The Society',
    description: 'Decades of conflict and instability have led to widespread poverty, food insecurity, and displacement. Women, children, and vulnerable groups face significant barriers to education, healthcare, and employment, deepening social inequalities and dependence on aid.'
  },
  {
    title: 'The Environment',
    description: 'Severe droughts and environmental degradation have devastated agriculture and water resources, increasing food insecurity and forcing rural populations into displacement. Without sustainable management, these challenges will continue to escalate.'
  },
  {
    title: 'The Pandemic',
    description: 'COVID-19 exposed Afghanistan\'s weak healthcare system and worsened economic instability. Job losses, inflation, and reduced access to medical care further pushed communities into crisis, making recovery even more challenging.'
  },
  {
    title: 'The Infrastructure',
    description: 'Damaged roads, poor electricity access, and inadequate healthcare and educational facilities limit economic growth and isolate rural communities from essential services, hindering long-term development.'
  }
];

const Problem = () => {
  return (
    <div className='w-full p-5 sm:p-10 bg-gray-100 flex flex-col gap-2'>
        <span className='font-semibold text-md text-blue-600'>THE CHALLENGE</span>
        <h1 className='font-semibold text-lg sm:text-2xl'>A Brief Story About The Problems</h1>
        <p className='text-sm text-gray-700 sm:max-w-3xl'>Afghanistan has long faced a complex and multifaceted humanitarian crisis, deeply rooted in decades of conflict, economic instability, and environmental challenges. The situation is further exacerbated by inadequate infrastructure, limited access to essential services, and recurring natural disasters. Understanding the scope of these problems through a macro, eagle-view approach allows us to identify key areas of intervention and measure the long-term outcomes of our work.</p>
        <div className='flex gap-3 justify-center flex-wrap'>
            {problems.map((problem, index) => (
              <ProblemCard 
                key={index}
                title={problem.title}
                description={problem.description}
              />
            ))}
        </div>
    </div>
  )
}

export default Problem