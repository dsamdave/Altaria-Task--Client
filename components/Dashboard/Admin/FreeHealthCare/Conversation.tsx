import React, { useState } from "react";
import Image from "next/image";
import { UserMessage, ResponseMessage } from "../Messages/MessageComponent";
import EndConversationModal from "./EndConversationModal";

const Conversation = () => {
  const attachOptions = [
    { iconSrc: "/image.svg" },
    { iconSrc: "/audio.svg" },
    { iconSrc: "/video.svg" },
  ];

  const [attach, setAttach] = useState(false);
  const [endConversation, setEndConversataion] = useState(false);

  const handleAttach = () => {
    setAttach(!attach);
  };

  const handleEndConversationModal = () =>{
    setEndConversataion(!endConversation)
  }

  return (
    <div className="h-full bg-white rounded-[15px] p-4">
      <h1 className="text-xl text-[#1B1B29] font-semibold pt-2">
        Free Health Care
      </h1>
      <div className="bg-white flex-1 border-t border-[#F1F5F8] shadow-2xl mt-3 ">
        {/* Top Section */}
        <div className="flex items-center justify-between p-3 border-b border-[#F1F5F8]">
          <div className="flex items-center gap-4">
            <Image
              src={"/m-user2.png"}
              width={40}
              height={40}
              alt="users"
              className="rounded-lg"
            />
            <h1 className="text-xl text-[#414d55] font-bold">
              'Princewill Iroka'
            </h1>
          </div>

          {/* Call icon and case history */}
          <div className="flex items-center gap-3">
            <button>
              <Image
                src={"/call-icon.svg"}
                width={40}
                height={40}
                alt="call icon"
                className="rounded-lg"
              />
            </button>
            <button className="w-[140px] bg-[#F60707] rounded-[20px] py-1.5 shadow-sm text-sm text-white font-normal text-center" onClick={handleEndConversationModal}>
              End Conversation
            </button>
          </div>
        </div>
        {/* Top section ends */}

        {/* CHAT CONTENTS */}
        <div className="max-h-[418px] overflow-y-auto px-4 py-2.5 lg:max-h-[500px] xl:max-h-[570px]">
          {/* Chat period/date */}
          <div className="flex items-center gap-1">
            <div className=" border-b w-5 h-1 border-dashed border-[#A2C0D4]" />
            <p className="text-[10px] text-[#414D55] font-bold">TODAY</p>
            <div className=" border-b flex-1 h-1 border-dashed border-[#A2C0D4]" />
          </div>
          {/* Chat content here */}
          <UserMessage
            attached={[]}
            userName=" "
            time="04:12 am"
            // messages={["Hello, Dr. Nicholas! 👋🏼"]}
          />
          <UserMessage
            attached={[]}
            userName=" "
            // userName="Princewill Iroka"
            time="04:13 am"
            // messages={[
            //   "I have some strange redness on the fingers 😱, could you check?",
            // ]}
          />
          <UserMessage
            attached={[]}
            userName=" "
            // userName="Princewill Iroka"
            time="04:17 am"
          />

          {/*  CHAT CONTENTS ENDS */}
        </div>

        <div className="relative">
          {/* Attach options */}
          {attach && (
            <div className="flex flex-col gap-1 items-center justify-center w-[44px] rounded-[22px] z-50 absolute right-5 -top-36 shadow-xl">
              {attachOptions.map((options, index) => (
                <button>
                  <Image
                    key={index}
                    src={options.iconSrc}
                    width={36}
                    height={36}
                    alt="attach icon"
                  />
                </button>
              ))}
            </div>
          )}

          {/* Attach options ends here */}
          {/* Message input area */}
          <div className="flex items-start gap-2 border-t border-[#F1F5F8] w-full p-3 mt-4 ">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              className="flex-1 p-2"
              placeholder="Start typing here"
            />
            <button onClick={handleAttach}>
              <Image
                src={"/attach-icon.svg"}
                width={16}
                height={16}
                alt="call icon"
                className="rounded-lg"
              />
            </button>
          </div>
          {/* Message input area ends */}
        </div>
      </div>
      {endConversation && <EndConversationModal  onClose={handleEndConversationModal}/>}
    </div>
  );
};

export default Conversation;
