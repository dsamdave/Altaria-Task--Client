import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";


const WhyChooseUs = () => {
  const whyData = [
    {
      imgSrc: "/wc1.png",
      title: "On-Demand Care",
      content:
        "Access healthcare professionals anytime, anywhere, from the comfort of your home or while on the go.",
    },
    {
      imgSrc: "/wc2.png",
      title: "Medical Expertise",
      content:
        "Our platform connects you with licensed, experienced healthcare providers who are dedicated to delivering high-quality care and personalized treatment plans. Your health and well-being are in safe hands.",
    },
    {
      imgSrc: "/wc3.png",
      title: "Web & Mobile Based",
      content:
        "Our platform provides a mobile & web based interface for users.",
    },
  ];
  //   Second why data
  const whyData2 = [
    {
      imgSrc: "/w1.png",
      title: "General Practitioners",
      content:
        "Get access to highly qualified Irish GPs with a deep understanding of  expatriate-specific health needs. Whether it's for a routine check-up or an acute  issue, our GPs are here to provide professional advice, prescriptions, and  ongoing care",
      title2: "Expatriate Focus",
      content2:
        "GPs on the platform can assist with health registration in  Ireland, provide guidance on navigating the local healthcare system, and offer  care tailored to different cultures and languages",
    },
    {
      imgSrc: "/w2.png",
      title: "Specialist Referrals",
      content:
        " Need to see a specialist? Our GPs can seamlessly refer you to Ireland’s top  specialists, including cardiologists, dermatologists, and other experts. Whether  you need a referral for a chronic condition or a second opinion, we ensure  smooth coordination",
      title2: "Expatriate Focus",
      content2:
        "We assist in understanding how the referral process works in  Ireland and how it helps expatriates avoid delays, ensuring they see the right  specialist promptly",
    },
    {
      imgSrc: "/w3.png",
      title: "Mental Health Consultations",
      content:
        "Your mental well-being is as important as your physical health. Connect with  licensed psychologists and counsellors who can help with stress, anxiety,  depression, and adjustment issues that often affect expatriates settling in a new  country.",
        title2: "Expatriate Focus",
        content2:
        "Our mental health consultations address challenges unique  to expatriates, such as culture shock, homesickness, or adjusting to a new work  environment. Multilingual mental health professionals should be available for  those who prefer counselling in their native language.",
    },
    // {
    //   imgSrc: "/w4.png",
    //   title: "Lorem ipsum dolor",
    //   content:
    //     "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ",
    // },
    // {
    //   imgSrc: "/w5.png",
    //   title: "Lorem ipsum dolor",
    //   content:
    //     "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ",
    // },
    // {
    //   imgSrc: "/w6.png",
    //   title: "Lorem ipsum dolor",
    //   content:
    //     "Ut sociis habitant lorem tortor faucibus et sit tellus nulla. Justo consequat dignissim massa convallis ",
    // },
  ];

  const router = useRouter();

  return (
    <div>
      <div className="bg-white px-4 lg:px-20 py-10 lg:py-40 ">
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#1D2B4F] text-center">
            Why Choose Us
          </h1>
          <p className="text-[16px] text-[#798196] font-normal mt-4 sm:w-[610px] text-center">
          Choose ExpatDoc for convenient, on-demand access to trusted healthcare professionals, anytime, anywhere. Experience secure, private consultations with personalized care tailored to your needs.
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
                <p className="text-justify tracking-tight text-[16px] text-[#798196] font-normal mt-4">
                  {data.content}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Other reasons */}
      <div className={`bg-[#F0F2F8] w-full py-10 lg:py-20 px-4 lg:px-20 ${router.asPath.includes('/about') ? 'hidden' : 'block' }`}>
        <div className="flex items-center justify-center flex-wrap gap-5 mt-8">
          {whyData2.map((data, index) => (
            <div key={index} className="w-full sm:w-[373px] mt-4 bg-white p-8 ">
              <Image src={data.imgSrc} width={60} height={72} alt="BP images" />
              <div className=" mt-3">
                <h1 className="text-xl sm:text-[22px] font-bold text-[#1D2B4F] ">
                  {data.title}
                </h1>
                <p className="text-justify tracking-tight text-[16px] text-[#798196] font-normal mt-4">
                  {data.content}
                </p>
                <p className="text-[16px] text-[#798196] font-normal mt-4">

                  <span className=" text-justify tracking-tight text-[16px] font-bold text-[#1D2B4F]">
                    {data.title2}: {" "}
                    </span>
                    
                    {data.content2}
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
