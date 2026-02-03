import React from 'react'
import { useNavigate } from 'react-router-dom';

const CTASection = () => {
  const navigate = useNavigate();
 return (
    <section className="bg-blue-600 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Want to Join Our Mission?
        </h2>
        <p className="text-blue-100 text-lg mb-8">
          We are always looking for passionate and talented people to join our team or volunteer.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
          onClick={() => navigate('/contact-us')}
          className="bg-white text-blue-600 font-semibold px-8 py-3 rounded hover:bg-gray-50 transition-colors">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default CTASection