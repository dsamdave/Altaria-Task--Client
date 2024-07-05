import React from 'react';

interface CustomHeroSectionProps{
    title: string,
    content: string
}

const CustomHeroSection: React.FC<CustomHeroSectionProps> = ({title, content}) => {
  return (
    <div className='pt-10 sm:pt-20'>
       <div className="flex flex-col items-center justify-center px-4">
          <h1 className="text-4xl sm:text-[64px] font-bold text-[#1D2B4F] text-center">
            {title}
          </h1>
          <p className="text-[16px] text-[#798196] font-normal mt-8 sm:w-[610px] text-center">
            {content}
          </p>
        </div>
    </div>
  )
}

export default CustomHeroSection
