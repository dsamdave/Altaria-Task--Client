import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { ResponseMessage, UserMessage } from "./MessageComponent";
import { IConsultation } from "@/pages/dashboard/hospitaldb/messages";
import { Conversation } from "../../Admin/Messages/Messages";
import { useAppSelector } from "@/redux/store";
import { toast } from "react-toastify";
import { SocketBaseURL } from "@/lib/query";
import io from "socket.io-client";
import { formatDateLabel, formatTime } from "@/utilities";
import dayjs from "dayjs";

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

  let lastDateLabel: string | null = null;
  const divRef = useRef<HTMLDivElement | null>(null);

  const [activeChat, setActiveChat] = useState<number>(0);
  const [attach, setAttach] = useState(false);

  const [selectedChatID, setSelectedChatID] = useState("");
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

  const [loading, setLoading] = useState(false);

  const [socket, setSocket] = useState<any>(null);
  const [messages, setMessages] = useState<Conversation[]>([]);
  const [selectedChat, setSelectedChat] = useState<IConsultation | null>(null);

  const [more, setMore] = useState(false);
  const [msg, setMsg] = useState("");
  const [media, setMedia] = useState<
    { uri: string; name: string; mimeType: string }[]
  >([]);

  const [typingUser, setTypingUser] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [attachments, setAttachments] = useState<File[]>([]);
  const [previewImages, setPreviewImages] = useState<string[]>([]);

  const handleAttach = () => {
    setAttach(!attach);
  };

  const scrollToBottom = () => {
    if (divRef.current) {
      divRef.current.scrollTop = divRef.current.scrollHeight;
    }
  };

  const handleChange = (e: any) => {
    setMsg(e.target.value);
  };

  const handleActiveChat = (index: number) => {
    setActiveChat(index);
    setIsChatOpen(true); // Open chat on small screens
  };

  const handleAttachmentOptionClick = () => {
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.multiple = true;
    fileInput.onchange = (event: Event) => {
      const target = event.target as HTMLInputElement;
      if (target.files) {
        const files = Array.from(target.files).slice(0, 4);
        setAttachments(files);
        const previews = files.map((file) => URL.createObjectURL(file));
        setPreviewImages(previews);
        handleAttach()
      }
    };
    fileInput.click();
  };

  const handleSubmitMessage = async () => {
    if (!msg.trim() && attachments.length < 1) {
      return;
    }

    if (selectedChat?.closed === true) {
      toast.error("This conversation has been closed.");
      setMsg("");
      setMedia([]);
      return;
    }

    // console.log({ msg, attachments})

    // return

    setLoading(true);

    const uploadedUrls: string[] = [];

    if (attachments.length > 0) {
      for (const file of attachments) {
        const formData = new FormData();
        formData.append("file", file);

        formData.append("upload_preset", "zi7fzibg");
        formData.append("cloud_name", "dvxsj1hf8");

        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dvxsj1hf8/upload",
          {
            method: "POST",
            body: formData,
          }
        );
        const data = await response.json();
        uploadedUrls.push(data.secure_url);
      }
    }

    const payload = {
      patientID: userID,
      doctorID: selectedChat?.patient?.id,
      message: msg,
      attachments: uploadedUrls,
      links: "",
      sender: userID,
      recipient: selectedChat?.doctor?.id,
    };

    // console.log({ payload });

    socket.emit("chatMessage", payload);

    // setLinks([]);
    setMsg("");
    setMedia([]);
    setPreviewImages([]);
   
    setLoading(false);
  };

  useEffect(() => {
    if (!userID && selectedChat) return;

    // console.log({ selectedChat });

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

    socketInstance.on("chatClosed", (data) => {
      setLoading(false);
      if (data?.closed === true) {
        toast.success("Chat has been closed.");
      }
      // console.log({ closedResponse: data });
    });

    return () => {
      socketInstance.off("chatMessages");
      socketInstance.off("chatMessagesError");
      socketInstance.off("chatClosed");
      socketInstance.off("stopTyping");
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

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // console.log({selectedChatID, selectedChat})

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsChatOpen(true); // Ensure chat is open on larger screens
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // console.log({messages})

  return (
    <div className="flex items-stretch gap-3 mt-5 h-full">
      {/* Left Section */}
      <div
        className={`w-full lg:w-[300px] bg-white shadow-2xl border-t border-[#F1F5F8] h-[1015px] relative lg:block ${
          isChatOpen ? "hidden" : "block"
        }`}
      >
        <div className=" max-h-[800px] overflow-y-scroll">
          {/* {messageData.map((data, index) => (
            <div
              key={index}
              className={`flex items-center justify-between p-2 sm:p-4 border-b border-[#F1F5F8] ${
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

          {consultations.map((data, index) => (
            <div
              key={index}
              className={`hover:bg-gray-100 flex items-center justify-between p-4 border-b border-[#F1F5F8] ${
                data?.id === selectedChatID ? "bg-[#F1F5F8] rounded-lg" : ""
              } cursor-pointer`}
              onClick={() => {
                handleActiveChat(index);
                setSelectedChatID(data?.id);
              }}
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
        className={`bg-white flex-1 border-t border-[#F1F5F8] shadow-2xl relative ${
          isChatOpen ? "block" : "hidden"
        }`}
      >
        {isChatOpen && (
          <Image
            src={"/mra.svg"}
            width={40}
            height={40}
            alt="icon"
            onClick={() => setIsChatOpen(false)}
            className="lg:hidden m-3"
          />
        )}

        {selectedChat ? (
          <div>
            {/* Top Section */}
            <div className="flex items-center justify-between p-3 border-b border-[#F1F5F8] flex-wrap">
              <div className="flex items-center gap-4">
                <div className="w-10 h-11 rounded-lg overflow-hidden">
                  <Image
                    src={selectedChat?.patient?.avatar || ""}
                    width={60}
                    height={60}
                    alt="users"
                    className="object-cover w-full h-full"
                  />
                </div>
                <h1 className="text-xl text-[#414d55] font-bold">
                  {selectedChat?.patient?.firstName}{" "}
                  {selectedChat?.patient?.lastName}
                </h1>
              </div>

              {/* Call icon and case history */}
              {/* <div className="flex items-center gap-3">
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
          </div> */}
            </div>
            {/* Top section ends */}

            {/* CHAT CONTENTS */}
            <div className="max-h-[418px] overflow-y-auto px-4 py-2.5 lg:max-h-[500px] xl:max-h-[570px] mb-28 lg:mb-0">
              {/* Chat period/date */}
              <div className="flex items-center gap-1"></div>
              {/* Chat content here */}

              <>
                {messages &&
                  messages.map((data, idx) => {
                    const messageDate = dayjs(data.createdAt);
                    const currentLabel = formatDateLabel(messageDate);

                    const shouldDisplayLabel = lastDateLabel !== currentLabel;
                    lastDateLabel = currentLabel;

                    // console.log({ data });

                    return (
                      <div key={idx}>
                        {/* Display date label when it changes */}
                        {shouldDisplayLabel && (
                          <div className="flex items-center gap-1">
                            <div className=" border-b w-5 h-1 border-dashed border-[#A2C0D4]" />
                            <p className="text-[10px] text-[#414D55] font-bold">
                              {currentLabel}
                            </p>
                            <div className=" border-b flex-1 h-1 border-dashed border-[#A2C0D4]" />
                          </div>
                        )}

                        {/* {data.sender === "66ede5a622950de08dae5fef" ? ( */}
                        {data.sender === userID ? (
                          <div>
                            <ResponseMessage
                              time={formatTime(data.createdAt)}
                              message={data.message}
                              attached={data.attachments}
                              userName={`${selectedChat?.patient?.firstName} ${selectedChat?.patient?.lastName}`}
                            />
                            {/* {
                              data.attachments.length > 0 &&
                              data.attachments.map((item, idx) => (
                                <ResponseMessage
                                  key={idx}
                                  attached={`${item}`}
                                  time={formatTime(data.createdAt)}
                                  userName={`${selectedChat?.patient?.firstName} ${selectedChat?.patient?.lastName}`}
                                />
                              ))} */}
                          </div>
                        ) : (
                          <div>
                            <UserMessage
                              key={idx}
                              attached={data.attachments}
                              time={formatTime(data.createdAt)}
                              messages={[data.message]}
                              userName={`${selectedChat?.doctor?.firstName} ${selectedChat?.doctor?.lastName}`}
                            />

                            {/* {data.attachments[0]?.url &&
                              data.attachments.length > 0 &&
                              data.attachments.map((item, idx) => (
                                <UserMessage
                                  key={idx}
                                  attached={`/${item}`}
                                  time={formatTime(data.createdAt)}
                                  userName={`${selectedChat?.doctor?.firstName} ${selectedChat?.doctor?.lastName}`}
                                />
                              ))} */}
                          </div>
                        )}
                      </div>
                    );
                  })}
              </>

              {/*  CHAT CONTENTS ENDS */}
            </div>

            {/* Message input area */}
            <div className=" items-start gap-2 border-t border-[#F1F5F8] w-full p-3 mt-4 absolute bottom-0">
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
                {previewImages.map((url, index) => (
                  <Image
                    key={index}
                    src={url}
                    width={50}
                    height={50}
                    alt={`preview ${index}`}
                    className="l h-auto rounded-lg object-cover"
                  />
                ))}
              </div>

              <div className=" flex items-start gap-2 border-t border-[#F1F5F8] w-full p-3 mt-4  ">
                {/* Attach options */}
                {attach && (
                  <div className="flex flex-col gap-1 items-center justify-center w-[44px] rounded-[22px] z-50 absolute right-5 -top-36 shadow-xl">
                    {attachOptions.map((options, index) => (
                      <button key={index} onClick={handleAttachmentOptionClick}>
                        <Image
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
                  className="flex-1 text-black placeholder:text-center p-2 h-10 lg:h-auto"
                  placeholder="Start typing here"
                  value={msg}
                  onChange={handleChange}
                />
                <div>
                  <button
                    onClick={handleAttach}
                    className="transition-transform transform hover:scale-150 mr-2"
                  >
                    <Image
                      src={"/attach-icon.svg"}
                      width={20}
                      height={20}
                      alt="call icon"
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
          </div>
        ) : (
          <div
            className="max-h-[418px] overflow-y-auto px-4 py-2.5 lg:max-h-[500px] xl:max-h-[570px] mb-28 lg:mb-0"
            style={{
              height: "100vh",
            }}
          >
            {/* Chat period/date */}
            <div className="flex items-center gap-1">
              <div className=" border-b w-5 h-1 border-dashed border-[#A2C0D4]" />
              <p className="text-[17px] text-[#414D55] font-bold">
                No conversation selected
              </p>
              <div className=" border-b flex-1 h-1 border-dashed border-[#A2C0D4]" />
            </div>

            {/*  CHAT CONTENTS ENDS */}
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
