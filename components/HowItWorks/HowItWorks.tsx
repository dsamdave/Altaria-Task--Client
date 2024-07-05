import Image from 'next/image'
import React from 'react'

const HowItWorks = () => {
  return (
    <div className='bg-white pt-20'>
      
          <Image src={"/d1.png"} width={981} height={10} alt="About image" className="m-auto -mt-44 lg:-mt-60" />
       
        <div className="flex flex-col items-center justify-center bg-white">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1D2B4F] text-center">
          How It Works
          </h1>
          <p className="text-[16px] text-[#798196] font-normal mt-4 sm:w-[610px] text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        {/* 1 */}
        <div className="bg-white  flex items-center justify-center xl:justify-between flex-wrap pt-4 ">
        {/* Card 1 */}
        <div className="w-full sm:w-[601px] lg:w-[680px] px-4 sm:px-20">
         
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1D2B4F] mt-3 ">
          1. Choose Doctor and Check Availability Schedule
          </h1>
          <p className="text-[16px] text-[#798196] font-normal mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-[16px] text-[#798196] font-normal mt-6 ">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          
        </div>
        {/* Card 2 */}
        <div className="w-full sm:w-[500px] lg:w-[600px] lg:h-[604px] mt-5 xl:mt-0">
          <Image
            src={"/d2.png"}
            width={504}
            height={10}
            alt="About image"
            className=" w-full lg:h-[604px] sm:rounded-lg  "
          />
        </div>
      </div>

        {/* 2 */}
        <div className="bg-white  flex items-center justify-center xl:justify-between flex-wrap-reverse xl:flex-wrap pt-4 pb-20">
        {/* Card 1 */}
           
           <div className="w-full sm:w-[500px] lg:w-[600px] lg:h-[604px] mt-5 xl:mt-0">
          <Image
            src={"/dd3.png"}
            width={504}
            height={10}
            alt="About image"
            className=" w-full lg:h-[604px] sm:rounded-lg  "
          />
        </div>
        {/* Card 2 */}
        <div className="w-full sm:w-[601px] lg:w-[680px] px-4 sm:px-20">
         
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1D2B4F] capitalize mt-3 ">
          2. Select Date and Book an Appointment
          </h1>
          <p className="text-[16px] text-[#798196] font-normal mt-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="text-[16px] text-[#798196] font-normal mt-6 ">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          
        </div>
     
      </div>
    </div>
  )
}

export default HowItWorks
