import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ResponseMessage, UserMessage } from "./MessageComponent";
import { IConsultation } from "@/pages/dashboard/hospitaldb/messages";
import { SocketBaseURL } from "@/lib/query";
import { useSelector } from "react-redux";
import { useAppSelector } from "@/redux/store";
import io from "socket.io-client";

interface IMsgProp {
  consultations: IConsultation[];
}

const Messages: React.FC<IMsgProp> = ({ consultations }) => {
  const { currentUser } = useAppSelector((state) => state.auth);
  const userID = currentUser?.id;
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
  const [selectedChatID, setSelectedChatID] = useState("");

  const [loading, setLoading] = useState(false);

  const [socket, setSocket] = useState<any>(null);
  const [messages, setMessages] = useState<Conversation[]>([]);
  const [selectedChat, setSelectedChat] = useState<IConsultation | null>(null);

  const [more, setMore] = useState(false);
  const [msg, setMsg] = useState("");
  const [media, setMedia] = useState<
    { uri: string; name: string; mimeType: string }[]
  >([]);

  const [time, setTime] = useState<string>("");
  const [typingUser, setTypingUser] = useState(null);
  const [isTyping, setIsTyping] = useState(false);

  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: any) => {
    setMsg(e.target.value);
  };

  const handleMoreOption = () => {
    setMore(!more);
  };

  const handleActiveChat = (index: number) => {
    setActiveChat(index);
  };

  const handleAttach = () => {
    setAttach(!attach);
  };

  const handleSubmitMessage = async () => {
    if (!msg.trim() && media.length < 1) {
      return;
    }

    console.log(msg);

    let attachments;
    setLoading(true);

    // if(media.length > 0){
    //   setLoading(true);

    //   const uploadPromises = media.map((file) =>
    //     upload4ImagesToCloud(file.uri, file.name, file.mimeType)
    //   );

    //   const uploadedImages = await Promise.all(uploadPromises);

    //   const imageUrls = await uploadedImages.map((image) => image.url);

    //   const urls = imageUrls.map((url, index) => ({
    //     filename: `File ${index + 1}`,
    //     url,
    //   }));

    //   attachments = urls

    //   setLoading(false);

    // }

    // console.log({
    //   patientID: selectedChat?.patientID,
    //   doctorID: userID,
    //   message: msg,
    //   attachments,
    //   links: "",
    //   sender: userID,
    //   recipient: selectedChat?.patientID,
    // })

    socket.emit("chatMessage", {
      patientID: selectedChat?.patient?.id,
      doctorID: userID,
      message: msg,
      attachments,
      links: "",
      sender: userID,
      recipient: selectedChat?.patient?.id,
    });

    // setLinks([]);
    setMsg("");
    setMedia([]);
    setLoading(false);
  };

  useEffect(() => {
    if (!userID && selectedChat) return;

    setLoading(true);
    const socketInstance = io(SocketBaseURL, {
      transports: ["websocket"],
      reconnectionAttempts: 5,
      timeout: 10000,
    });
    setSocket(socketInstance);

    socketInstance.on("connect", () => {
      socketInstance.emit("joinRoom", userID);
    });

    socketInstance.emit("getChats", { conversationID: selectedChatID, userID });

    socketInstance.on("chatMessages", (data) => {
      setLoading(false);
      setMessages(data);
    });

    socketInstance.on("newMessage", (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    socketInstance.on("typing", (userID) => {
      setTypingUser(userID);
    });

    socketInstance.on("stopTyping", (userID) => {
      setTypingUser(null);
    });

    socketInstance.on("chatMessagesError", (error) => {
      console.error(error.message);
      setLoading(false);
    });

    return () => {
      socketInstance.off("chatMessages");
      socketInstance.off("chatMessagesError");
      socketInstance.disconnect();
    };
  }, [currentUser?.id, selectedChat]);

  useEffect(() => {
    if (!selectedChatID) return;

    const selectChatHistory =
      consultations &&
      consultations?.filter((each, idx) => {
        return each?.id === selectedChatID;
      });

    setSelectedChat(selectChatHistory[0]);
  }, [selectedChatID]);

  console.log({ messages });

  return (
    <div
      className="flex items-stretch gap-3 mt-5 fixed top-0 left-0 h-[85%]"
      style={{
        marginLeft: "270px",
        marginTop: "100px",
        // width: "50%",
        // height: "60vh"
      }}
    >
      {/* Left Section */}
      <div className=" w-[300px] bg-white shadow-2xl border-t border-[#F1F5F8]  relative ">
        <div className="overflow-y-scroll h-[95%] ">
          {consultations.map((data, index) => (
            <div
              key={index}
              className={`hover:bg-gray-100 flex items-center justify-between p-4 border-b border-[#F1F5F8] ${
                data?.id === selectedChatID ? "bg-[#F1F5F8] rounded-lg" : ""
              } cursor-pointer`}
              onClick={() => setSelectedChatID(data?.id)}
            >
              <div className="shrink flex items-center gap-4">
                <div className="w-10 h-10 relative">
                  <div className="w-10 h-11 rounded-lg overflow-hidden">
                    <Image
                      src={data?.patient?.avatar}
                      alt="User img"
                      width={60}
                      height={60}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
                <div>
                  <h1 className="text-base text-[#414D55] font-bold">
                    {data.patient?.firstName} {data.patient?.lastName}{" "}
                  </h1>
                  <p className="text-sm text-[#90A1AC] font-normal mt-1">
                    {data?.lastMessage}
                  </p>
                  <p className="text-[10px] text-red-500">
                    {new Date(data?.updatedAt).toLocaleString()}
                  </p>
                </div>
              </div>
              {/* Number of messages */}

              {/* {data.numberOfMessages !== "" ? (
                <div className="w-[22px] h-5 rounded-[10px] bg-[#FDCA40] flex items-center justify-center">
                  <p className="text-[10px] text-[#2D353B] font-normal">
                    {data.numberOfMessages}
                  </p>
                </div>
              ) : null} */}
              {/* nUMBER OF MESSAGES ENDS */}
            </div>
          ))}
          {/* {messageData.map((data, index) => (
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

              {data.numberOfMessages !== "" ? (
                <div className="w-[22px] h-5 rounded-[10px] bg-[#FDCA40] flex items-center justify-center">
                  <p className="text-[10px] text-[#2D353B] font-normal">
                    {data.numberOfMessages}
                  </p>
                </div>
              ) : null}
            </div>
          ))} */}
        </div>

        {/* Search Input area */}
        {/* <div className="absolute bottom-10 flex items-center justify-center w-full  px-5">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search patinets"
            className=" w-[326px] bg-[#FAFBFD] rounded-lg py-3 px-2 outline-none"
          />
        </div> */}
      </div>

      {/* Right Side */}
      {/* Right Side */}
      <div
        className="overflow-x-auto whitespace-nowrap bg-white flex-1 border-t border-[#F1F5F8] shadow-2xl relative"
        style={{ width: "50vw" }}
      >
        {selectedChat ? (
          <div>
            {/* Top Section */}
            <div className="flex items-center justify-between p-3 border-b border-[#F1F5F8]">
              <div className="flex items-center gap-4">
                <div className="w-10 h-11 rounded-lg overflow-hidden">
                  <Image
                    src={selectedChat?.patient?.avatar || ""}
                    alt="User img"
                    width={60}
                    height={60}
                    className="object-cover w-full h-full"
                  />
                </div>
                <h1 className="text-xl text-[#414d55] font-bold">
                  {selectedChat?.patient?.firstName}{" "}
                  {selectedChat?.patient?.lastName}
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
                  <p className="text-sm text-[#1E2230] font-normal">
                    Case history
                  </p>
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
            <div
              className="max-h-[418px] overflow-y-auto px-4 py-2.5 lg:max-h-[500px] xl:max-h-[570px]"
              style={{ paddingBottom: "100px" }}
            >
              {/* Chat period/date */}
              <div className="flex items-center gap-1">
                <div className=" border-b w-5 h-1 border-dashed border-[#A2C0D4]" />
                <p className="text-[10px] text-[#414D55] font-bold">TODAY</p>
                <div className=" border-b flex-1 h-1 border-dashed border-[#A2C0D4]" />
              </div>
              {/* Chat content here */}

              {messages &&
                messages.map((data, idx) =>
                  data?.doctorID === userID ? (
                    <div>
                      <ResponseMessage
                        key={idx}
                        time="10:18 am"
                        message={data?.message}
                        attached=""
                        userName="Me"
                      />
                      {
                        data.attachments[0]?.url && data?.attachments?.map((item, idx) => (

                          <UserMessage attached={`/${item}`} time="04:17 am" />
                        )) 
                          
                         
                      }
                    </div>
                  ) : (
                    <div>
                      <UserMessage
                        key={idx}
                        attached=""
                        // userName={messageData[activeChat].userName}
                        time="04:12 am"
                        message={data?.message}
                      />

                      {
                        data.attachments[0]?.url && data?.attachments?.map((item, idx) => (

                          <UserMessage attached={`/${item}`} time="04:17 am" />
                        )) 
                          
                         
                      }

                    </div>
                  )
                )}

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
                name="msg"
                id="msg"
                cols={30}
                rows={4}
                className="flex-1 p-2 text-black"
                placeholder="Start typing here"
                value={msg}
                onChange={handleChange}
              />

              <div className="flex flex-col items-center gap-2">
                <button
                  onClick={handleAttach}
                  className="transition-transform transform hover:scale-150"
                >
                  <Image
                    src={"/attach-icon.svg"}
                    width={16}
                    height={16}
                    alt="attach icon"
                    className="rounded-lg"
                  />
                </button>
                <button
                  className="bg-blue-500 text-white p-2 rounded-lg shrink"
                  onClick={handleSubmitMessage}
                >
                  {loading ? "loading..." : "Send"}
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div>
              <div className="flex justify-center">
                <Image
                  src={"/no-m.svg"}
                  width={44}
                  height={44}
                  alt="No message icon"
                />
              </div>
              <h1 className="text-xl text-[#0F1222] font-bold mt-3">
                No conversation selected
              </h1>
              <p className="text-base text-[#535875] font-normal w-[480px] mt-2">
                All your chats and messages will appear here.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;

export interface Attachment {
  url: string;
  filename: string;
  _id: string;
}

interface PatientInfo {
  medications: object;
  appointments: object[];
  conditions?: object[];
  treatmentHistory?: object[];
  labResults?: object[];
  basicInformation?: object;
  allergies?: object[];
  clinicalVitals?: object[];
}

interface Person {
  avatar: string;
  country: string;
  firstName: string;
  lastName: string;
  id: string;
  latitude: number;
  longitude: number;
  patientID: string;
  patientInfo: PatientInfo;
  phoneNumber: string;
  role: string;
  state: string;
}

export interface Conversation {
  attachments: Attachment[];
  conversationID: string;
  createdAt: string;
  doctor: Person;
  doctorID: string;
  id: string;
  links: string[];
  message: string;
  patient: Person;
  patientID: string;
  recipient: string;
  sender: string;
  updatedAt: string;
}
