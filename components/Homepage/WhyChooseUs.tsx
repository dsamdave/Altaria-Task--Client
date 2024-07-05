import Image from "next/image";
import React from "react";

const WhyChooseUs = () => {
  const whyData = [
    {
      imgSrc: "/wc1.png",
      title: "Modern UI",
      content:
        "Amet minim mollit non etca deserunt ullamco est sit etca aliqua dolor do amet sint etca aliqua dolor do amet.",
    },
    {
      imgSrc: "/wc2.png",
      title: "Secure System",
      content:
        "Amet minim mollit non etca deserunt ullamco est sit etca aliqua dolor do amet sint etca aliqua dolor do amet.",
    },
    {
      imgSrc: "/wc3.png",
      title: "Web Based",
      content:
        "Amet minim mollit non etca deserunt ullamco est sit etca aliqua dolor do amet sint etca aliqua dolor do amet.",
    },
  ];
  //   Second why data
  const whyData2 = [
    {
      imgSrc: "/w1.png",
      title: "Lorem ipsum dolor",
      content:
        "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ",
    },
    {
      imgSrc: "/w2.png",
      title: "Lorem ipsum dolor",
      content:
        "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ",
    },
    {
      imgSrc: "/w3.png",
      title: "Lorem ipsum dolor",
      content:
        "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ",
    },
    {
      imgSrc: "/w4.png",
      title: "Lorem ipsum dolor",
      content:
        "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ",
    },
    {
      imgSrc: "/w5.png",
      title: "Lorem ipsum dolor",
      content:
        "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ",
    },
    {
      imgSrc: "/w6.png",
      title: "Lorem ipsum dolor",
      content:
        "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ",
    },
  ];
  return (
    <div>
      <div className="bg-white px-4 lg:px-20 py-10 lg:py-40 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1D2B4F] text-center">
            Why Choose Us
          </h1>
          <p className="text-[16px] text-[#798196] font-normal mt-4 sm:w-[610px] text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>
        {/* Card section */}
        <div className="flex items-center justify-center flex-wrap gap-3 mt-8">
          {whyData.map((data, index) => (
            <div
              key={index}
              className="w-full sm:w-[392px] flex items-start gap-2 lg:gap-4 flex-wrap mt-4 "
            >
              <Image src={data.imgSrc} width={60} height={72} alt="BP images" />
              <div className="sm:w-[296px]">
                <h1 className="text-xl sm:text-[32px] font-bold text-[#1D2B4F] ">
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

      {/* Other reasons */}
      <div className="bg-[#F0F2F8] w-full py-10 lg:py-20 px-4 lg:px-20">
        <div className="flex items-center justify-center flex-wrap gap-5 mt-8">
          {whyData2.map((data, index) => (
            <div key={index} className="w-full sm:w-[373px] mt-4 bg-white p-8 ">
              <Image src={data.imgSrc} width={60} height={72} alt="BP images" />
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
    </div>
  );
};

export default WhyChooseUs;
