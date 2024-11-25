
import Messages from "@/components/Dashboard/Users/Messages/Messages";
import NoMessage from "@/components/Dashboard/Users/Messages/NoMessage";
import { useAppSelector } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { IConsultation } from "../../hospitaldb/messages";
import { SocketBaseURL } from "@/lib/query";
import io from 'socket.io-client';

const index = () => {

  const { currentUser } = useAppSelector((state) => state.auth);


    const [showComponent, setShowComponent] = useState(true);

    const [consultations, setConsultations] = useState<IConsultation[]>([]);
    const [socket, setSocket] = useState<any>(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
      if (!currentUser?.id) return; 
  
      const userID = currentUser?.id
      // const userID = "66ede5a622950de08dae5fef"
  
      setLoading(true);
  
      const socketInstance = io(SocketBaseURL, {
        transports: ['websocket'],  
        reconnectionAttempts: 3,    
        timeout: 10000,            
      });
  
      setSocket(socketInstance);  
  
      socketInstance.on("connect", () => {
        socketInstance.emit("joinRoom", userID);
      });
  
      socketInstance.emit("getChatsHistory", { userID });
  
      // Handle chat history response
      socketInstance.on("conversationHistory", (data) => {
        setLoading(false);
        setConsultations(data);  
      });
  
      // Handle errors
      socketInstance.on("conversationHistoryError", (error) => {
        console.error("Chat history error:", error.message);
        setLoading(false);
      });
  
      // Handle socket connection error
      socketInstance.on("connect_error", (error) => {
        console.error("Connection error:", error.message);
        setLoading(false);
      });
  
      return () => {
        socketInstance.off("conversationHistory");
        socketInstance.off("conversationHistoryError");
        socketInstance.disconnect();
      };
    }, [currentUser?.id]); 
 

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowComponent(false);
    }, 2000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timer); 
  }, [showComponent]);



console.log({consultations, user: currentUser?.id})


  return (
    <div className="p-2 sm:p-5 bg-[#ECF0FF] h-full ">
      <div className="bg-white rounded-[15px] p-2 sm:p-3">
      <h1 className="text-2xl lg:text-3xl text-[#414D55] font-bold">Message Chat</h1>

      {/* {showComponent ? <NoMessage/> : <Messages />} */}

      {consultations && consultations?.length < 1 ? <NoMessage/> : <Messages consultations={consultations} />}


      </div>
    </div>
  );
};

export default index;
