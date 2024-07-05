import Image from 'next/image'
import React from 'react'

const PlatformFeatures = () => {
    const platformData = [
        {
          imgSrc: "/p1.png",
          title: "Lorem ipsum dolor",
          content:
            "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ",
        },
        {
          imgSrc: "/p2.png",
          title: "Lorem ipsum dolor",
          content:
            "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ",
        },
        {
          imgSrc: "/p3.png",
          title: "Lorem ipsum dolor",
          content:
            "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ",
        },
        {
          imgSrc: "/p4.png",
          title: "Lorem ipsum dolor",
          content:
            "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ",
        },
       
      ];
  return (
    <div className='bg-[#F0F2F8] px-4 lg:px-20 py-10 lg:py-40 '>
       <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1D2B4F] text-center">
          Platform Features
          </h1>
          <p className="text-[16px] text-[#798196] font-normal mt-4 sm:w-[610px] text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>

        {/* Card section */}
        <div className="flex items-center justify-center flex-wrap gap-5 mt-8">
          {platformData.map((data, index) => (
            <div key={index} className="w-[270px] h-[279px] mt-4 bg-white p-4 ">
              <Image src={data.imgSrc} width={60} height={72} alt="PF images" />
              <div className=" mt-3">
                <h1 className="text-xl sm:text-[24px] font-bold text-[#1D2B4F] ">
                  {data.title}
                </h1>
                <p className="text-[16px] text-[#798196] font-normal mt-4">
                  {data.content}
                </p>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default PlatformFeatures
