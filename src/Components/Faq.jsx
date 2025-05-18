import React, { useState } from 'react';
import { faqs } from '../constant/faqs';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  

  return (
    <div className="wrapper font-sans py-10">
      <h1 className="text-3xl text-start md:text-center font-bold text-gray-800 mb-8">Frequently Asked Questions</h1>
      
      <div className="space-y-4">
        {faqs?.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
            <button
              className="w-full p-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h2 className="font-semibold text-lg text-gray-700">{faq.question}</h2>
              <svg
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${activeIndex === index ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            {activeIndex === index && (
              <div className="p-4 bg-white">
                <p className="text-gray-600 mb-4">{faq.answer}</p>
                
                {faq.subQuestions && (
                  <div className="ml-4 mt-4 space-y-3 border-l-2 border-gray-200 pl-4">
                    {faq.subQuestions.map((subQ, subIndex) => (
                      <div key={subIndex} className="mb-3">
                        <h3 className="font-medium text-gray-700">- {subQ.question}</h3>
                        <p className="text-gray-600 mt-1 ml-4">{subQ.answer}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;