
import React, { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-700/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 focus:outline-none"
        aria-expanded={isOpen}
      >
        <span className="font-medium text-white/90 text-base">{question}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
            <p className="pb-4 text-gray-400 text-sm">{answer}</p>
        </div>
      </div>
    </div>
  );
};

export default FAQItem;
