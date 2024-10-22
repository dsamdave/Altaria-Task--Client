import React from 'react'
import Navbar from '../Universal/Navbar'

const HeroSection = () => {
  return (
//  <div  className="w-full bg-[url('/m-hero-bg.png')] lg:bg-no-repeat lg:bg-top h-[600px] lg:h-[700px] z-50">
//       <Navbar />
//     <div className='  px-4 lg:px-20 pt-10 lg:pt-20 flex items-center justify-center lg:justify-start '>
//      <div className='w-full sm:w-[500px]'>
//      <h1 className='sm:text-5xl text-2xl text-[#003647] font-semibold capitalize'>take care of your health anytime and anywhere</h1>
//       <p className='text-lg text-gray-400 font-normal mt-5'>There nothing more important than our good healthy, cause that’s our principal capital asset for our good future</p>

//       <div className='flex items-center flex-wrap w-full gap-4 mt-8'>
//         <button className='w-full lg:w-[187px] rounded-3xl py-2 bg-[#10BEDA] text-center text-[16px] text-white font-medium'>Get Appointment</button>
//         <button className='w-full lg:w-[153px] rounded-3xl py-2 bg-transparent border border-[#003647] text-center text-[16px] text-[#003647] font-medium'>Learn More</button>
//       </div>
//      </div>
//     </div> 
//  </div>

<div className="w-full bg-[url('/m-hero-bg.png')] lg:bg-no-repeat lg:bg-top lg:bg-cover h-[600px] lg:h-[655px] z-50">
  <Navbar />
  <div className="px-4 lg:px-20 pt-10 lg:pt-20 flex items-center justify-center lg:justify-start">
    <div className="w-full sm:w-[500px]">
      <h1 className="sm:text-5xl text-2xl text-[#003647] font-semibold capitalize">
        take care of your health anytime and anywhere
      </h1>
      <p className="text-lg text-gray-400 font-normal mt-5">
        There nothing more important than our good healthy, cause that’s our principal capital asset for our good future
      </p>
      <div className="flex items-center flex-wrap w-full gap-4 mt-8">
        <button className="shrink w-full lg:w-[187px] rounded-3xl py-2 bg-[#10BEDA] text-center text-[16px] text-white font-medium">
          Get Appointment
        </button>
        <button className="shrink w-full lg:w-[153px] rounded-3xl py-2 bg-transparent border border-[#003647] text-center text-[16px] text-[#003647] font-medium">
          Learn More
        </button>
      </div>
    </div>
  </div>
</div>

  )
}

export default HeroSection
