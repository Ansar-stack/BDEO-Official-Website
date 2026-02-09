import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const Faqs = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full md:w-1/2 px-2">
      <div className="border border-gray-200 rounded-lg mb-2 overflow-hidden">
        {/* Question */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between text-left px-4 py-1 sm:px-5 focus:outline-none"
        >
          <h3 className="text-sm sm:text-base font-medium faq-question text-gray-900">
            {question}
          </h3>

          <FiChevronDown
            className={`text-gray-500 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
            size={18}
          />
        </button>

        {/* Answer */}
        <div
          className={`grid transition-all duration-300 ease-in-out ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden faq-answer px-4 sm:px-5 pb-3 text-sm sm:text-base text-gray-600">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
