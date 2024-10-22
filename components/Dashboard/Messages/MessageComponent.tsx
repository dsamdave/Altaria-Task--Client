import Image from "next/image";

// Define the prop types for UserMessage
interface UserMessageProps {
  time: string;
  message?: string;
  // messages?: string[];
  attached: string;
  // userName: string;
}

// Define the prop types for ResponseMessage
interface ResponseMessageProps {
  time: string;
  message: string;
  attached: string;
  userName: string;
}

export const UserMessage: React.FC<UserMessageProps> = ({
  time,
  message,
  attached,
  // userName,
}) => (
  <div className="mt-5">
    <div className="flex items-center gap-3">
      {/* <p className="text-xs text-[#90A1AC] font-normal">{"tets"}</p> */}
      <p className="text-xs text-[#90A1AC] font-normal text-right">{time}</p>
          </div>

    <div className="max-w-[536px]">
 
       {/* {messages?.map((msg, index) => (
        <p
          key={index}
          className="text-sm text-[#414D55] font-normal px-3 py-2 bg-[#F1F5F8] rounded-lg w-fit mt-1"
        >
          {msg}
        </p>
      ))} */}
        <p
          className="text-sm text-[#414D55] font-normal px-3 py-2 bg-[#F1F5F8] rounded-lg w-fit mt-1"
        >
          {message}
        </p>
  
      {attached !== "" ? (
        <Image src={attached} width={200} height={200} alt="attached" />
      ) : null}
    </div>
  </div>
);

export const ResponseMessage: React.FC<ResponseMessageProps> = ({
  time,
  message,
  attached,
  userName,
}) => (
  <div className="flex items-center justify-end w-full mt-5">
    <div className="max-w-[536px]">
      <div className="flex items-center justify-end gap-3">
        <p className="text-xs text-[#90A1AC] font-normal">{userName}</p>
        <p className=" text-xs text-[#90A1AC] font-normal">{time}</p>
      </div>
      <p className="text-sm text-[#414D55] font-normal px-3 py-2 w-fit bg-[#DEEEFF] rounded-lg w-[300px] text-wrap"
      >
        {message}
      </p>
      {attached !== "" ? (
        <Image src={attached} width={200} height={200} alt="attached" />
      ) : null}
    </div>
  </div>
);
