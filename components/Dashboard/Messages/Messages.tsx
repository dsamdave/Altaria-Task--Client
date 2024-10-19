import Image from "next/image";
import React, { useState } from "react";
import { ResponseMessage, UserMessage } from "./MessageComponent";

const Messages = () => {
  const messageData = [
    {
      userImg: "/m-user2.png",
      userName: "Harold Joe",
      recentMessage: "Thank you",
      numberOfMessages: "2",
      status: "online",
    },
    {
      userImg: "/m-user.png",
      userName: "Harold Joe",
      recentMessage: "Typing",
      numberOfMessages: "",
      status: "online",
    },
    {
      userImg: "/m-user.png",
      userName: "Harold Joe",
      recentMessage: "Can you help me?",
      numberOfMessages: "7",
      status: "online",
    },
    {
      userImg: "/m-user.png",
      userName: "Harold Joe",
      recentMessage: "",
      numberOfMessages: "",
      status: "offline",
    },
    {
      userImg: "/m-user.png",
      userName: "Harold Joe",
      recentMessage: "Hello",
      numberOfMessages: "8",
      status: "offline",
    },
    {
      userImg: "/m-user.png",
      userName: "Harold Joe",
      recentMessage: "Hello",
      numberOfMessages: "10",
      status: "offline",
    },
    {
      userImg: "/m-user.png",
      userName: "Harold Joe",
      recentMessage: "I will revert",
      numberOfMessages: "10",
      status: "online",
    },
    {
      userImg: "/m-user.png",
      userName: "Harold Joe",
      recentMessage: "I will revert",
      numberOfMessages: "10",
      status: "online",
    },
    {
      userImg: "/m-user.png",
      userName: "Harold Joe",
      recentMessage: "I will revert",
      numberOfMessages: "10",
      status: "online",
    },
    {
      userImg: "/m-user2.png",
      userName: "Harold Joe",
      recentMessage: "I will revert",
      numberOfMessages: "10",
      status: "online",
    },
    {
      userImg: "/m-user2.png",
      userName: "Harold Bridges",
      recentMessage: "Hello",
      numberOfMessages: "8",
      status: "offline",
    },
    {
      userImg: "/m-user2.png",
      userName: "Harold Joe",
      recentMessage: "Hello",
      numberOfMessages: "8",
      status: "offline",
    },
    {
      userImg: "/m-user2.png",
      userName: "Harold Joe",
      recentMessage: "Hello",
      numberOfMessages: "8",
      status: "offline",
    },
  ];

  const attachOptions = [
    { iconSrc: "/image.svg" },
    { iconSrc: "/audio.svg" },
    { iconSrc: "/video.svg" },
  ];

  const [activeChat, setActiveChat] = useState<number>(0);
  const [attach, setAttach] = useState(false);

  const handleActiveChat = (index: number) => {
    setActiveChat(index);
  };

  const handleAttach = () => {
    setAttach(!attach);
  };
  return (
    <div className="flex items-stretch gap-3 mt-5 h-full">
      {/* Left Section */}
      <div className="w-[300px] bg-white shadow-2xl border-t border-[#F1F5F8] h-[1015px] relative">
        <div className=" max-h-[800px] overflow-y-scroll">
          {messageData.map((data, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-4 border-b border-[#F1F5F8] ${
                activeChat === index ? "bg-[#F1F5F8] rounded-lg" : ""
              } cursor-pointer`}
              onClick={() => handleActiveChat(index)}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 relative">
                  {data.status === "online" ? (
                    <Image
                      src={"/online.svg"}
                      width={12}
                      height={12}
                      alt="online icon"
                      className="absolute -right-1 -top-1.5"
                    />
                  ) : null}
                  <Image
                    src={data.userImg}
                    width={40}
                    height={40}
                    alt="users"
                    className="rounded-lg"
                  />
                </div>
                <div>
                  <h1 className="text-base text-[#414D55] font-bold">
                    {data.userName}
                  </h1>
                  <p className="text-sm text-[#90A1AC] font-normal mt-1">
                    {data.recentMessage}
                  </p>
                </div>
              </div>
              {/* Number of messages */}

              {data.numberOfMessages !== "" ? (
                <div className="w-[22px] h-5 rounded-[10px] bg-[#FDCA40] flex items-center justify-center">
                  <p className="text-[10px] text-[#2D353B] font-normal">
                    {data.numberOfMessages}
                  </p>
                </div>
              ) : null}
              {/* nUMBER OF MESSAGES ENDS */}
            </div>
          ))}
        </div>

        {/* Search Input area */}
        <div className="absolute bottom-10 flex items-center justify-center w-full  px-5">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search patinets"
            className=" w-[326px] bg-[#FAFBFD] rounded-lg py-3 px-2 outline-none"
          />
        </div>
      </div>

      {/* Right Side */}
      {/* Right Side */}
      <div className="bg-white flex-1 border-t border-[#F1F5F8] shadow-2xl relative">
        {/* Top Section */}
        <div className="flex items-center justify-between p-3 border-b border-[#F1F5F8]">
          <div className="flex items-center gap-4">
            <Image
              src={messageData[activeChat].userImg}
              width={40}
              height={40}
              alt="users"
              className="rounded-lg"
            />
            <h1 className="text-xl text-[#414d55] font-bold">
              {messageData[activeChat].userName}
            </h1>
          </div>

          {/* Call icon and case history */}
          <div className="flex items-center gap-3">
            <button className="w-[140px] bg-white rounded-[20px] flex items-center justify-center gap-1 py-1.5 shadow-sm border border-[#142E6E1A]">
              <Image
                src={"/m-case.svg"}
                width={20}
                height={20}
                alt="call icon"
                className="rounded-lg"
              />
              <p className="text-sm text-[#1E2230] font-normal">Case history</p>
            </button>
            <button>
              <Image
                src={"/call-icon.svg"}
                width={40}
                height={40}
                alt="call icon"
                className="rounded-lg"
              />
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
            attached={""}
            userName={messageData[activeChat].userName}
            time="04:12 am"
            messages={["Hello, Dr. Nicholas! 👋🏼"]}
          />
          <UserMessage
            attached={""}
            userName={messageData[activeChat].userName}
            time="04:13 am"
            messages={[
              "I have some strange redness on the fingers 😱, could you check?",
            ]}
          />
          <UserMessage
            attached={"/attach.png"}
            userName={messageData[activeChat].userName}
            time="04:17 am"
          />

          <ResponseMessage
            time="10:18 am"
            message="Hello. You need to come and pass a few tests."
            attached=""
            userName="Me"
          />
          <ResponseMessage
            time="10:18 am"
            message="When will it be convenient for you to come to the reception?"
            attached=""
            userName="Me"
          />

          {/*  CHAT CONTENTS ENDS */}
        </div>
        {/* Message input area */}
        <div className="flex items-start gap-2 border-t border-[#F1F5F8] w-full p-3 mt-4 absolute bottom-0">
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
      </div>
    </div>
  );
};

export default Messages;
