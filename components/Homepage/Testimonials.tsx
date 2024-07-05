import Image from "next/image";
import React from "react";

const Testimonials = () => {
  const testimonialData = [
    {
      imgSrc: "/t2.png",
      title: "Lorem ipsum dolor",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      nmae: "Jack Anderson",
      portfolio: "CEO Apple Inc.",
    },
    {
      imgSrc: "/t3.png",

      title: "Lorem ipsum dolor",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      nmae: "Matthew Johnson",
      portfolio: "CEO MaxiHealth",
    },
    {
      imgSrc: "/t4.png",

      title: "Lorem ipsum dolor",
      content:
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
      nmae: "Andry King",
      portfolio: "Founders RumahSehat",
    },
  
  ];
  return (
    <div className="py-20 bg-white">
      <div className="bg-[#F5FAFF] px-4 lg:px-20 py-10 lg:py-40">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1D2B4F] text-center">
            Testimonials
          </h1>
          <p className="text-[16px] text-[#798196] font-normal mt-4 sm:w-[610px] text-center">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam.
          </p>
        </div>

        {/* Card Section */}
        <div className="flex items-center justify-center flex-wrap gap-5 mt-8">
          {testimonialData.map((data, index) => (
            <div
              key={index}
              className="sm:w-[400px] h-[468px] rounded-lg mt-4 bg-white p-10 sm:p-20 "
            >
              <Image
                src={"/t1.png"}
                width={60}
                height={72}
                alt="PF images"
                className="m-auto"
              />

              <p className="text-[16px] text-[#798196] font-normal mt-4 text-center">
                {data.content}
              </p>
              <Image
                src={data.imgSrc}
                width={60}
                height={72}
                alt="PF images"
                className="m-auto mt-10"
              />
              <h2 className="text-[16px] text-bold text-[#1D2B4F] mt-5 text-center">
                {data.nmae}
              </h2>
              <p className="text-sm text-[#798196] font-normal mt-2 text-center">
                {data.portfolio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
