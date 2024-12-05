import Image from "next/image";
import ImageModal from "./imageModal";
import { useState } from "react";

// Define the prop types for UserMessage
interface UserMessageProps {
  time: string;
  messages?: string[];
  attached: string[];
  userName: string;
}

// Define the prop types for ResponseMessage
interface ResponseMessageProps {
  time: string;
  message?: string;
  attached: string[];
  userName: string;
}

export const UserMessage: React.FC<UserMessageProps> = ({
  time,
  messages,
  attached,
  userName,
}) => {

  const [previewImg, setPreviewImg] = useState(false)
  const [imgUrl, setImgURl] = useState("")

  const handlePreviewImg = () => {
    setPreviewImg(!previewImg)
  };
  const viewImage = (url: string) => {
    console.log({ url });
    setImgURl(url)
    handlePreviewImg()
  };
  
  return (
  <div className="mt-5">
    <div className="flex items-center gap-3">
      <p className="text-xs text-[#90A1AC] font-normal">{userName}</p>
      <p className="text-xs text-[#90A1AC] font-normal">{time}</p>
    </div>

    <div className="max-w-[536px]">
      {messages?.map((msg, index) => (
        <p
          key={index}
          className="text-sm text-[#414D55] font-normal px-3 py-2 bg-[#F1F5F8] rounded-lg w-fit mt-1"
        >
          {msg}
        </p>
      ))}

      {attached.length > 0
        ? attached.map((each, i) => (
            <Image
            key={i}
              src={each}
              width={50}
              height={50}
              alt="attached"
              className="cursor-pointer shrink"
              onClick={() => viewImage(each)}
            />
          ))
        : null}
    </div>

    { previewImg && <ImageModal onClose={handlePreviewImg} imgUrl={imgUrl} />}

  </div>
);}

export const ResponseMessage: React.FC<ResponseMessageProps> = ({
  time,
  message,
  attached,
  userName,
}) => {

  const [previewImg, setPreviewImg] = useState(false)
  const [imgUrl, setImgURl] = useState("")

  const handlePreviewImg = () => {
    setPreviewImg(!previewImg)
  };
  const viewImage = (url: string) => {
    console.log({ url });
    setImgURl(url)
    handlePreviewImg()
  };

  return (
    <div className="flex items-center justify-end w-full mt-5">
      <div className="max-w-[536px]">
        <div className="flex items-center justify-end gap-3">
          <p className="text-xs text-[#90A1AC] font-normal">{userName}</p>
          <p className="text-xs text-[#90A1AC] font-normal">{time}</p>
        </div>
        <p className="text-sm text-[#414D55] font-normal px-3 py-2 w-fit bg-[#DEEEFF] rounded-lg">
          {message}
        </p>
        {attached.length > 0
          ? attached.map((each, i) => (
              <Image
              key={i}
                src={each}
                width={50}
                height={50}
                alt="attached"
                className="cursor-pointer shrink"
                onClick={()=> viewImage(each)}

              />
            ))
          : null}
      </div>
      { previewImg && <ImageModal onClose={handlePreviewImg} imgUrl={imgUrl} />}

      
    </div>
  );
};
