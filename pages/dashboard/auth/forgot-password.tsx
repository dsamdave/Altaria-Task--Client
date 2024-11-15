import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/Universal/CustomButton";
import CustomInput from "@/components/Universal/CustomInput";
import { useRouter } from "next/router";
import { useApiMutation } from "@/lib/useApi";
import { toast } from "react-toastify";
import Toast from "@/components/Universal/Toast";
import Spinner from "@/components/Universal/Spinner";

interface IResponse {
  message: string;

}

export interface IReqOtpVariables {
  identifier: string
}


const forgot_password = () => {
  const [formValues, setFormValues] = useState({
    email: "",
  });
  const [emailSent, setEmailSent] = useState(false);
  const router = useRouter();

  const resendOTP = useApiMutation<IResponse, IReqOtpVariables>("/forgot-password");


  const handleInputChange = (fieldName: string, value: string) => {
    setFormValues({
      ...formValues,
      [fieldName]: value,
    });
  };



  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setEmailSent(false);
  //   }, 5000);

  //   return () => clearTimeout(timer);
  // }, [setEmailSent]);

  const handleResendOtp = (e: React.FormEvent) => {
    e.preventDefault();

    if(!formValues.email){
      return toast.error("Please enter your email!")
    }

    resendOTP.mutate({identifier: formValues.email}, {
      onSuccess: (data: IResponse) => {
        if (data?.message === "Successful") {
          toast.success("OTP Sent, check email!");
          router.push({
            pathname: "/reset-password",
            query: { email: formValues.email },
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
      <div className="bg-white w-full flex items-center justify-center p-6 lg:px-0 h-screen lg:h-auto">
        {emailSent ? (
          <div className="mx-auto">
            {/* Email Sent */}
            <h1 className="text-lg lg:text-2xl font-bold text-[#1E2230] ">
              Email Sent
            </h1>
            <p className="text-sm  text-[#8692A6] font-bold mt-3">
              Check your email to continue
            </p>
            <div className="flex items-center gap-1 mt-3">
              <p className="text-sm font-medium text-[#5C5C5C]">
                Don’t receive mail?
              </p>
              <Link
                href={"/dashboard"}
                className="cursor-pointer border-0 text-center  text-[#77ACE9] text-sm"
              >
                Click here
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleResendOtp} className=" shadow-xl p-3 sm:w-[550px] sm:p-10">
            <h1 className="text-lg font-bold text-[#1E2230] lg:text-3xl">
              Forgot Password
            </h1>

            <p className="text-sm lg:text-lg text-[#8692A6] font-bold mt-3">
              Please enter email to receive reset password OTP
            </p>

            <div className="m-auto mt-5 lg:mt-10 w-full ">
              {/* FORM FIELDS */}

              <CustomInput
                label="Email Address"
                placeholder="Email Address"
                type="email"
                value={formValues.email}
                onChange={(value) => handleInputChange("email", value)}
                className2="w-full bg-transparent"
              />

              <CustomButton
                className={`rounded-[5px] p-[10px] text-center 
              bg-[#1E2230]  w-full border-0 text-lg font-bold text-white shrink border-transparent mt-8`}
                btnText={"Send"}
                greenBorder={false}
                whiteBorder={false}
                type="submit"
              />
              {/* Footer */}
              <div className="mt-3 flex items-center justify-center gap-1">
                <p className="text-sm font-normal text-[#5C5C5C]">
                  Already have an account?{" "}
                </p>
                <Link
                  href={"/dashboard/auth/login"}
                  className="shrink cursor-pointer border-0 text-center text-sm font-medium text-[#1E2230] sm:text-lg"
                >
                  Log In
                </Link>
              </div>
              {/* Footer ends */}
            </div>
          </form>
        )}
      </div>

      { resendOTP.isPending && <Spinner />}   

    </div>
  );
};
export default forgot_password;
