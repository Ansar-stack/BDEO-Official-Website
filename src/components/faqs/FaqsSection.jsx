import React, { useState } from 'react'
import Button from '../UI/Button'
import { FAQs } from '../../Data/Faqs'
import Faqs from './Faqs'
const Buttons = ['All Questions', 'About BDEO', 'Program & Projects', 'Donations', 'Volenteerings'];
const FaqsSection = () => {
  const [question, setQuestion] = useState('All Questions');
  return (
    <div className='w-full py-10 flex flex-col gap-5 items-center'>
      {/* Buttons */}
      <div className='flex gap-2 flex-wrap items-center justify-center'>
        {Buttons.map((elem, index) => (
          <Button
            onClick={() => {
              setQuestion(elem);
            }}
            text={elem} classes={`faq-btn ${question === elem ? `bg-blue-600 text-white` : `text-gray-800  hover:bg-gray-50`}`} key={index} />
        ))}
      </div>
      {/* Faqs */}
      <div className='flex flex-col items-center'>
        {FAQs.map((elem, index) => {
          return question === "All Questions" ? <Faqs key={index} question={elem.question} answer={elem.answer} /> : elem.category === question ? <Faqs key={index} question={elem.question} answer={elem.answer} /> : <></>
        })}
      </div>
    </div>
  )
}

export default FaqsSection