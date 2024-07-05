import Image from 'next/image';
import { useState } from 'react';

const FAQ = () => {
  const faqs = [
    {
      question: 'Why should I choose a medical platform like MedDaz ?',
      answer:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    },
    {
      question: 'What services does MedDaz Offer?',
      answer:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    },
    {
      question: 'What are the requirements to use this platform?',
      answer:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    },
    {
      question: 'How much the price of the platform?',
      answer:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    },
 
  ];

  const faqs2 = [
    {
      question: 'How to buy this platform service?',
      answer:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    },
    {
      question: 'What services does MedDaz Offer?',
      answer:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    },
    {
      question: 'What are the requirements to use this platform?',
      answer:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    },
    {
      question: 'What are the benefits if I use this platform?',
      answer:
        'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ',
    },
 
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openIndex2, setOpenIndex2] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleAnswer2 = (index: number) => {
    setOpenIndex2(openIndex2 === index ? null : index);
  };
  return (
    <div className='px-5 lg:px-20 bg-white py-10 sm:py-40 '>
     <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1D2B4F] text-center sm:w-[390px]">
          Many People Ask 
          About This
          </h1>
          <p className="text-[16px] text-[#798196] font-normal mt-4 sm:w-[610px] text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          </p>
        </div>

      {/* FAQ */}
      <div className='mx-auto mt-10 flex items-center flex-wrap justify-center xl:gap-5'>
       <div className='sm:w-[600px]'>
       {faqs.map((faq, index) => (
          <div
            key={index}
            className='border-b border-secondary-lighter py-5'
          >
            <div
              className='flex items-center  cursor-pointer gap-4'
              onClick={() => toggleAnswer(index)}
            >
               <div>
                {openIndex === index ? (
                  <Image src={'/arrow-top.png'} width={24} height={24} alt='Arrow icon' />
                  
                ) : (
                  <Image src={'/arrow-right.png'} width={24} height={24} alt='Arrow icon' />

                )}
              </div>
              <div>
                <h5 className='text-sm lg:text-[16px] text-gray-900 font-medium lg:font-bold'>
                  {faq.question}
                </h5>
              </div>
             
            </div>
            {openIndex === index && (
              <div className='mt-2 text-gray-600'>
                <p className='text-sm md:text[16px] text-gray-500 leading-5 font-normal md:font-medium'>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
       </div>

        {/* Second FAQ */}
        <div className='sm:w-[600px]'>
        {faqs2.map((faq, index) => (
          <div
            key={index}
            className='border-b border-secondary-lighter py-5'
          >
            <div
              className='flex items-center cursor-pointer gap-4'
              onClick={() => toggleAnswer2(index)}
            >
               <div>
                {openIndex2 === index ? (
                  <Image src={'/arrow-top.png'} width={24} height={24} alt='Arrow icon' />
                  
                ) : (
                  <Image src={'/arrow-right.png'} width={24} height={24} alt='Arrow icon' />

                )}
              </div>
              <div>
                <h5 className='text-sm lg:text-[16px] text-gray-900 font-medium lg:font-bold'>
                  {faq.question}
                </h5>
              </div>
             
            </div>
            {openIndex2 === index && (
              <div className='mt-2 text-gray-600'>
                <p className='text-sm md:text[16px] text-gray-500 leading-5 font-normal md:font-medium'>
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
