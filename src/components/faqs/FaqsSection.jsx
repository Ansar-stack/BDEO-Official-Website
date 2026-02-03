import React, { useState } from 'react'
import { FAQs } from '../../Data/Faqs'
import Faqs from './Faqs'
import { ChevronRight, Filter, HelpCircle } from 'lucide-react' 

const Buttons = ['All Questions', 'About BDEO', 'Program & Projects', 'Donations', 'Volenteerings'];

const FaqsSection = () => {
  const [activeFilter, setActiveFilter] = useState('All Questions');
  const [hoveredFilter, setHoveredFilter] = useState(null);

  return (
    <div className='w-full py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20 px-4 sm:px-5 md:px-6 lg:px-8 xl:px-12 flex flex-col gap-6 sm:gap-7 md:gap-8 lg:gap-10 xl:gap-12 items-center bg-gradient-to-b from-white to-blue-50/20'>
      
      {/* Header */}
      <div className='text-center w-full max-w-5xl xl:max-w-6xl mx-auto mb-2 sm:mb-3 md:mb-4'>
        <div className='inline-flex items-center gap-1.5 sm:gap-2 mb-2 sm:mb-3 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-50 sm:bg-blue-100 text-blue-600 text-xs sm:text-sm font-medium'>
          <Filter className='w-3 h-3 sm:w-4 sm:h-4' />
          <span>Frequently Asked Questions</span>
        </div>
        <h2 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-5'>
          Find Answers to <span className='bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>Common Questions</span>
        </h2>
        <p className='text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto px-2 sm:px-4'>
          Explore our comprehensive FAQ section to find solutions and information about BDEO's initiatives
        </p>
      </div>

      {/* Filter Buttons */}
      <div className='relative w-full max-w-5xl xl:max-w-6xl mx-auto px-2 sm:px-0'>
        {/* Animated background for active filter - Hidden on mobile to save space */}
        <div className='absolute inset-0 -z-10 hidden sm:block'>
          <div className='absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-blue-100/40 to-indigo-100/30 blur-xl' />
          <div className='absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-r from-purple-100/30 to-pink-100/20 blur-xl' />
        </div>

        <div className='flex flex-wrap gap-2 sm:gap-3 md:gap-4 items-center justify-center'>
          {Buttons.map((elem, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(elem)}
              onMouseEnter={() => setHoveredFilter(elem)}
              onMouseLeave={() => setHoveredFilter(null)}
              className={`relative px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-lg sm:rounded-xl font-medium transition-all duration-300 ease-out
                ${activeFilter === elem
                  ? 'text-white shadow-md sm:shadow-lg shadow-blue-500/20'
                  : 'text-gray-700 bg-white hover:bg-gray-50 border border-gray-200 hover:border-blue-200 hover:shadow-sm sm:hover:shadow-md'
                }
                group overflow-hidden text-xs sm:text-sm md:text-base`}
            >
              {/* Gradient background for active state */}
              {activeFilter === elem && (
                <div className='absolute inset-0 bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600' />
              )}

              {/* Hover gradient overlay */}
              {hoveredFilter === elem && activeFilter !== elem && (
                <div className='absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50' />
              )}

              {/* Ripple effect - Reduced on mobile */}
              <span className={`absolute inset-0 bg-white/20 rounded-lg sm:rounded-xl scale-0 transition-transform duration-500 
                ${activeFilter === elem ? 'scale-100' : 'group-hover:scale-100'}`} />

              {/* Content */}
              <span className='relative z-10 flex items-center gap-1 sm:gap-2'>
                {/* Mobile-only icon for filter buttons */}
                {activeFilter === elem && (
                  <Filter className='w-3 h-3 sm:w-4 sm:h-4 block sm:hidden' />
                )}
                <span className='truncate max-w-[100px] xs:max-w-[120px] sm:max-w-none'>
                  {elem === 'Program & Projects' ? 'Programs' : 
                   elem === 'Volenteerings' ? 'Volunteer' : elem}
                </span>
                {activeFilter === elem && (
                  <ChevronRight className='w-3 h-3 sm:w-4 sm:h-4 hidden sm:block transform group-hover:translate-x-1 transition-transform duration-300' />
                )}
              </span>

              {/* Bottom indicator - Hidden on mobile to save space */}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 
                rounded-full transition-all duration-500 ease-out hidden sm:block
                ${activeFilter === elem ? 'w-3/4' : 'w-0 group-hover:w-1/2'}`} />
            </button>
          ))}
        </div>
      </div>

      {/* Active Filter Indicator */}
      <div className='flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3 text-xs sm:text-sm text-gray-600 px-2'>
        <span className='font-medium'>Currently viewing:</span>
        <span className='px-2 py-1 sm:px-3 sm:py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 sm:from-blue-100 sm:to-indigo-100 
                        text-blue-600 font-semibold border border-blue-200 text-xs sm:text-sm'>
          {activeFilter === 'Program & Projects' ? 'Programs' : 
           activeFilter === 'Volenteerings' ? 'Volunteer' : activeFilter}
        </span>
        <span className='text-gray-400'>
          ({activeFilter === 'All Questions' ? FAQs.length : FAQs.filter(faq => faq.category === activeFilter).length} questions)
        </span>
      </div>

      {/* FAQ Items */}
      <div className='w-full max-w-3xl sm:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto mt-2 sm:mt-3 md:mt-4 space-y-2 sm:space-y-3 md:space-y-4 px-2 sm:px-0'>
        {FAQs.map((elem, index) => {
          const isVisible = activeFilter === "All Questions" || elem.category === activeFilter;
          
          return isVisible ? (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={Math.min(index * 50, 300)} // Reduced delay for mobile
            >
              <Faqs
                question={elem.question}
                answer={elem.answer}
                category={elem.category}
                index={index}
              />
            </div>
          ) : null;
        })}

        {/* Empty state */}
        {activeFilter !== 'All Questions' && FAQs.filter(faq => faq.category === activeFilter).length === 0 && (
          <div className='text-center py-8 sm:py-10 md:py-12 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-gradient-to-br from-gray-50 to-blue-50/30 border border-gray-200'>
            <div className='w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center'>
              <HelpCircle className='w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-blue-600' />
            </div>
            <h3 className='text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3'>
              No questions in this category yet
            </h3>
            <p className='text-gray-600 text-sm sm:text-base max-w-xs sm:max-w-sm md:max-w-md mx-auto'>
              We're working on adding more questions about "{activeFilter}". Check back soon or contact us directly.
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default FaqsSection