// components/PaymentConfirmation.js
import Image from 'next/image';
import React, { useState } from 'react';


interface ConfirmPaymentProp{
    onAppointmentConfirmation: ()=>void;
}

const ConfirmPayment: React.FC<ConfirmPaymentProp> = ({onAppointmentConfirmation}) =>{
    const [cardType, setCardType] = useState(0)
    const cardTypeData = [
        {
          imgSrc: "/co2.png",
          cardName: "Credit Card",
        },
        {
          imgSrc: "/co3.png",
          cardName: "Paypal",
        },
        {
          imgSrc: "/co4.png",
          cardName: "Apple Pay",
        },
      ];
  return (
    <div className="w-full sm:w-[300px] mx-auto bg-white rounded-xl  overflow-hidden md:max-w-2xl p-2  my-10">
      <h3 className=" text-gray-600 text-xs mb-2">Step 3 of 3</h3>
      <h2 className=" text-xl font-semibold mb-4">Confirm Payment</h2>
      
      <div className=" p-2 rounded-lg mb-4 mt-20">
        <div className="flex justify-between items-center">
          <div className='flex items-center gap-2'>
            <Image src={'/co1.png'} width={24} height={24} alt='icon' />
          <p className="text-sm text-[#1E1F20] font-normal">Service Price</p>
          </div>
          <span className="text-sm font-bold text-[#1E1F20]">NGN 4,500</span>
        </div>
        <p className="text-[#9393AA] text-xs mt-1 text-right">100% Satisfaction Guarantee</p>
      </div>
      <div className="flex items-center  justify-between  sm:px-2 my-10">
              {cardTypeData.map((data, index) => (
                <div
                  key={index}
                  className={`w-[65px] sm:w-[72px]} `}
                  onClick={() => setCardType(index)}
                >
                  <div
                    className={`w-[65px] h-[65px] sm:w-[72px] sm:h-[72px] border border-[#E0E0E0] flex items-center justify-center rounded-2xl ${
                     cardType === index ? "bg-[#1DA1F2]" : ""
                    }`}
                  >
                    <Image
                      src={data.imgSrc}
                      width={20}
                      height={20}
                      alt="Images"
                    />
                  </div>

                  <p
                    className={`text-[10px] sm:text-xs text-center ${
                     cardType === index
                        ? "font-bold text-[#1E1F20]"
                        : "text-[#9393AA]"
                    }`}
                  >
                    {data.cardName}
                  </p>
                </div>
              ))}
            </div>

      <div className="flex justify-between items-center bg-white rounded-lg shadow-md mb-6 py-3 px-1">
        <div className='flex items-stretch gap-2'>
        <Image src={'/co5.png'} width={24} height={24} alt='icon' />
        <p className="text-[#1E1F20] text-xs font-bold">xxxx - xxxx - xxxx - 5689</p>
        </div>
        <button className="text-[#1E2230] font-semibold text-sm -mt-2">Change</button>
      </div>

      <button className="bg-[#0364FF] text-white p-2 sm:p-3 w-full rounded-xl font-semibold flex items-center justify-center gap-2 mt-8" onClick={onAppointmentConfirmation}>
      <Image src={'/co6.png'} width={24} height={24} alt='icon' />
      Make Payemt
      </button>
    </div>
  );
}


export default ConfirmPayment