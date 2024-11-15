import React, { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/Universal/CustomButton";
import CustomInput from "@/components/Universal/CustomInput";
import { useRouter } from "next/router";
import { useApiMutation } from "@/lib/useApi";
import { toast } from "react-toastify";
import { validateUserRegister } from "@/utilities/validations/authValids";
import Toast from "@/components/Universal/Toast";
import Spinner from "@/components/Universal/Spinner";

export interface IResponse {
  message: string;
  // user: IUser;
}

export interface IOtpVariables {
  identifier: string | string[] | undefined, otp: string
}

export interface IReqOtpVariables {
  identifier: string | string[] | undefined 
}

const Index = () => {
  const router = useRouter();
  const { email } = router.query;

  const verifyOTP = useApiMutation<IResponse, IOtpVariables>("/verify-OTP");
  const resendOTP = useApiMutation<IResponse, IReqOtpVariables>("/request-OTP");

  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState<number>(180); // 3 minutes in seconds
  const [isResendDisabled, setIsResendDisabled] = useState<boolean>(true);


  
  const handleOtpChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (!/^\d$/.test(value) && value !== "") return; // Allow only single digit

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Move focus to next input
    if (value && index < otpValues.length - 1) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) (nextInput as HTMLInputElement).focus();
    }
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const otpCode = otpValues.join("");

    const payload = {
      identifier: email, otp: otpCode
    }

    console.log({payload});

    if(!otpCode){
      return toast.error("Please enter OTP!")
    }

    verifyOTP.mutate(payload, {
      onSuccess: (data: IResponse) => {

        if (data?.message === "Successful") {
          toast.success("Account created!");
          router.push({
            pathname: "/login",
            // query: { email: formValues.email },
          });
        } else {
          return;
        }
      },
      onError: (error: any) => {
        toast.error(() => (
          <Toast
            title="Process failed:"
            body={error?.response?.data?.message || "Unknown error"}
          />
        ));
      },
    });
  };


  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleResendOtp = () => {
    setOtpValues(["", "", "", ""]);
    setTimeLeft(180); // Reset timer to 3 minutes
    setIsResendDisabled(true);

    resendOTP.mutate({identifier: email}, {
      onSuccess: (data: IResponse) => {
        if (data?.message === "Successful") {
          toast.success("OTP Resent!");
        } else {
          return;
        }
      },
      onError: (error: any) => {
        toast.error(() => (
          <Toast
            title="Process failed:"
            body={error?.response?.data?.message || "Unknown error"}
          />
        ));
      },
    });
  };



  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timerId);
    } else {
      setIsResendDisabled(false);
    }
  }, [timeLeft]);


  return (
    <div className="lg:flex lg:items-stretch h-full">
      <div className="bg-[#1E2230] w-full sm:w-[800px] hidden lg:block">
        <div className="mt-20 px-20">
          <Image
            src={"/new_logo.svg"}
            width={136}
            height={136}
            alt="Logo"
            className="shrink cursor-pointer mb-20"
            onClick={() => router.push("/")}
          />
          <h1 className="mb-10 text-4xl text-white font-bold mt-3">
            Africa's No. 1 Digital Healthcare Platform
          </h1>
          <p className="mt-8 text-lg font-bold text-white">
            Enjoy access to 24/7 health care services, telemedicine and
            consultation with expert healthcare professionals
          </p>
        </div>
        <Image
          src={"/login-img.png"}
          width={450}
          height={136}
          alt="Logo"
          className=""
        />
      </div>

      <div
        className="bg-white w-full flex items-center justify-center p-6 lg:px-0 "
        style={{ height: "100vh" }}
      >
       
       <form onSubmit={handleSubmit} className="shadow-xl p-3 sm:w-[550px] sm:p-10">
      <h1 className="text-lg font-bold text-[#1E2230] lg:text-3xl">Verify OTP</h1>
      <p className="text-sm lg:text-lg text-[#8692A6] font-bold mt-3">
        Please enter OTP sent to email.
      </p>

      <div className="m-auto mt-5 lg:mt-10 w-full">
        <div
          className="flex w-full items-center justify-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap"
          style={{ width: "40vh", margin: "auto" }}
        >
          {otpValues.map((value, index) => (
            <div className="mt-4 w-1/8 sm:w-auto flex justify-center" key={index}>
              <div className="relative mt-1 rounded-[3px] border border-[#CED4DA]">
                <input
                  type="text"
                  maxLength={1}
                  value={value}
                  onChange={(e) => handleOtpChange(e, index)}
                  className="w-10 h-10 sm:w-20 sm:h-12 text-center border border-gray-300 rounded bg-white px-1 py-1.5 text-[16px] font-normal text-[#565656] outline-none transition-colors"
                  id={`otp-input-${index}`}
                  placeholder=""
                />
              </div>
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="shrink rounded-[5px] p-[10px] text-center bg-[#1E2230] w-full border-0 text-lg font-bold text-white mt-8"
        >
          Submit
        </button>

        {/* Countdown Timer */}
        <div className="mt-3 flex items-center justify-center gap-1 text-sm text-[#5C5C5C]">
          <p>Resend OTP in {formatTime(timeLeft)}</p>
        </div>

        {/* Resend OTP link */}
        <div className="mt-3 flex items-center justify-center gap-1">
          <p className="text-sm font-normal text-[#5C5C5C]">Didn't receive OTP?</p>
          {
            !isResendDisabled && (

          <button
            type="button"
            onClick={handleResendOtp}
            disabled={isResendDisabled}
            className="shrink cursor-pointer text-sm font-medium text-[#1E2230] sm:text-lg"
          >
            Resend OTP
          </button>
            )
          }
        </div>
      </div>
    </form>


      </div>

      {(verifyOTP.isPending || resendOTP.isPending) && <Spinner />}   
       </div>
  );
};

export default Index;
