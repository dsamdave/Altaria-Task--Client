import React from "react";
import Image from "next/image";

const ContactUs = () => {
  const inputs = [
    { type: "text", placeholder: "Your First Name", title: "First Name" },
    { type: "text", placeholder: "Your Last Name", title: "Last Name" },
    { type: "email", placeholder: "email@example.com", title: "Email" },
  ];
  return (
    <div className="bg-white px-4 py-10 sm:py-20 lg:py-40">
      <div className="flex items-start justify-center gap-4 lg:gap-10 flex-wrap-reverse sm:flex-wrap lg:flex-wrap-reverse xl:flex-wrap">
        {/* Form Area */}
        <div className=" lg:w-[688px]">
          <form action="">
            {/* First Name */}
            {inputs.map((data, index) => (
              <div key={index} className="mb-5">
                <label
                  htmlFor=""
                  className="text-sm text-[#1D2B4F] font-semibold"
                >
                  {data.title}
                </label>
                <input
                  type={data.type}
                  name=""
                  id=""
                  placeholder={data.placeholder}
                  className="bg-white outline-none rounded-lg p-4 w-full border border-[#CCCCCC] mt-2"
                />
              </div>
            ))}
            <div>
              <p className="text-sm text-[#1D2B4F] font-semibold">Message</p>
              <textarea
                name=""
                id=""
                cols={30}
                rows={8}
                placeholder="Write Your Message"
                className="bg-white outline-none rounded-lg p-4 w-full border border-[#CCCCCC] mt-2"
              ></textarea>
            </div>
            {/* Button */}
            <div className="mt-8">
              <button className="w-full sm:w-[207px] rounded-lg py-4 bg-black text-center text-[16px] text-white font-medium">
                Send Messages
              </button>
            </div>
          </form>
        </div>

        {/* Office Container */}
        <div className=" lg:w-[400px]">
            <h1 className="text-3xl text-[#1D2B4F] font-bold">Our Office</h1>
            <div className="border border-[#CCCCCC] bg-white p-6 rounded-lg mt-6">
                {/* Office */}
                <div className="mt-5">
                    <h2 className="text-[16px] text-[#1D2B4F] font-bold">Office Addres</h2>
                    <p className="text-[#798196] text-xs font-bold mt-3">4517 Dickson Ave. Manchester, Kenya 39495</p>
                </div>
                {/* Our Email */}
                <div className="mt-5">
                    <h2 className="text-[16px] text-[#1D2B4F] font-bold">Our Email</h2>
                    <p className="text-[#798196] text-xs font-bold mt-3">Hello@medtele.com</p>
                </div>
                {/* Phone Number */}
                <div className="mt-5">
                    <h2 className="text-[16px] text-[#1D2B4F] font-bold">Phone Number</h2>
                    <p className="text-[#798196] text-xs font-bold mt-3">(245) 675-0127</p>
                </div>

            </div>
        </div>
      </div>
      {/* Map Image */}
      <Image src={'/map.png'} width={1232} height={24} alt='Arrow icon' className="m-auto mt-10 lg:mt-16" />
    </div>
  );
};

export default ContactUs;
