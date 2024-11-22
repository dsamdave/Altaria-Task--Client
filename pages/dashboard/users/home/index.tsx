import BookingModal from "@/components/Dashboard/Users/Home/Booking/BookingModal";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import FreeHealthModal from "@/components/Dashboard/Users/Home/FreeHealth/FreeHealthModal";
import NextConsult from "@/components/Dashboard/Users/Home/NextConsult/NextConsult";




const Index = () => {


const [bookingModal, setBookingModal] = useState(false);
const [freeHealthQuestionModal, setFreeHealthQuestionModal] = useState(false);
const [nextConsult, setNextConsult] = useState(false);


const handleBookingModal = ()=>{
  setBookingModal(!bookingModal)
}

const handleAskFreeHealthQuestionModal = () =>{
  setFreeHealthQuestionModal(!freeHealthQuestionModal)
}

const handleNextConsult = () =>{
  setNextConsult(!nextConsult)
}



const cardData = [
  {
    text: "Ask a free health question",
    image: "/h1.png",
    action: handleAskFreeHealthQuestionModal
  },
  {
    text: "Your Consultations",
    image: "/h2.png",
    action: handleNextConsult
  },
  {
    text: "My File",
    image: "/h3.png",
  },
  {
    text: "Book Consultation",
    image: "/h4.png",
    action: handleBookingModal
  },
];



useEffect(() => {
  window.scrollTo(0, 0);
}, []);


  return (
    <div>

    <div className="h-full pt-5">
      {/* <div className="flex items-center gap-3">
        <div>
          <h3 className="text-xl sm:text-2xl text-[#1E1F20] font-semibold">
            <span className="font-bold">Self Check</span> for today
          </h3>
          <p className="text-base text-[#9393AA] font-semibold">
            2 of 6 completed
          </p>
        </div>
        <Image src={"/prog.png"} width={83} height={83} alt="Progress image" />
      </div> */}

      {/* CARDS */}
      <div className="flex items-center justify-center gap-3 flex-wrap mt-5">
        {/* Cards */}
        {cardData.map((data, index) => (
          <div key={index} className=" shrink w-full sm:w-[300px] h-[316px] bg-white rounded-2xl flex flex-col justify-center cursor-pointer shadow-lg" onClick={data.action}>
            <Image
              src={data.image}
              width={113}
              height={110}
              alt="home image"
              className="mx-auto"
            />
            <p className="text-xs text-[#1E1F20] font-normal text-center mt-1">
              {data.text}
            </p>
          </div>
        ))}
      </div>
    </div>
      {bookingModal && <BookingModal onClose={handleBookingModal} />}
      {freeHealthQuestionModal && <FreeHealthModal onClose={handleAskFreeHealthQuestionModal} />}
      {nextConsult && <NextConsult onClose={handleNextConsult}/>}

    </div>
  );
};

export default Index;
