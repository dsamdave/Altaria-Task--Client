import React, { ChangeEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/Universal/CustomButton";
import CustomInput from "@/components/Universal/CustomInput";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { useApiMutation } from "@/lib/useApi";
import { IResponse } from "./verify-otp";
import Toast from "@/components/Universal/Toast";
import Spinner from "@/components/Universal/Spinner";

export interface IOtpVariables {
  identifier: string | string[] | undefined;
  password: string;
  otp: string;
}

const reset_password = () => {
  const router = useRouter();
  const { email } = router.query;

  const [otpValues, setOtpValues] = useState<string[]>(["", "", "", ""]);

  const [formValues, setFormValues] = useState({
    password: "",
    confirmPassword: "",
  });

  const resetPassword = useApiMutation<IResponse, IOtpVariables>("/reset-password");

  const handleInputChange = (fieldName: string, value: string) => {
    setFormValues({
      ...formValues,
      [fieldName]: value,
    });
  };

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
      identifier: email,
      password: formValues.password,
      otp: otpCode,
    };

    console.log({ payload });

    if (!otpCode || otpCode.length < 4) {
      return toast.error("Please enter OTP!");
    }

    if (!formValues.password) {
      return toast.error("Please enter your password.");
    } else if (formValues.password.length < 6) {
      return toast.error("Incorrect password.");
    } else if (formValues.password !== formValues.confirmPassword) {
      return toast.error("Passwords do not match!");
    } else if (!/[A-Z]/.test(formValues.password)) {
      return toast.error("Please password must contain a capital letter");
    } else if (!/[0-9]/.test(formValues.password)) {
      return toast.error("Please password must contain a number");
    }

    resetPassword.mutate(payload, {
      onSuccess: (data: IResponse) => {
        if (data?.message === "Successful") {
          toast.success("Password reset successful!");
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

      <div className="bg-white w-full flex items-center justify-center px-1 lg:px-0 h-screen lg:h-auto">
        <form
          onSubmit={handleSubmit}
          className=" shadow-xl p-3 sm:w-[550px] sm:p-10"
        >
          <h1 className="text-lg  font-bold text-[#1E2230] lg:text-3xl">
            Reset Password
          </h1>

          <p className="text-sm lg:text-lg text-[#8692A6] font-bold mt-3">
            Please Login to access your account
          </p>

          <div className="m-auto mt-5 lg:mt-10 w-full ">
            {/* FORM FIELDS */}

            <label className="block text-sm font-medium text-gray-700">
              Enter OTP
            </label>
            <div
              className="flex w-full items-center justify-center gap-2 sm:gap-4 flex-wrap sm:flex-nowrap"
              style={{ width: "40vh", margin: "auto" }}
            >
              {otpValues.map((value, index) => (
                <div
                  className="mt-4 w-1/8 sm:w-auto flex justify-center"
                  key={index}
                >
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

            <CustomInput
              label="Enter new password"
              placeholder="*******"
              type="password"
              value={formValues.password}
              onChange={(value) => handleInputChange("password", value)}
              showPasswordToggle
              className2="w-full"
              className="mt-4"
            />
            <CustomInput
              label="Re-enter new password"
              placeholder="*******"
              type="password"
              value={formValues.confirmPassword}
              onChange={(value) => handleInputChange("confirmPassword", value)}
              showPasswordToggle
              className2="w-full"
              className="mt-4"
            />

            <CustomButton
              className={`rounded-[5px] p-[10px] text-center 
                   bg-[#1E2230]  w-full border-0 text-lg font-bold text-white shrink border-transparent mt-8`}
              btnText={"Login"}
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
                href={"/login"}
                className="shrink cursor-pointer border-0 text-center text-sm font-medium text-[#1E2230] sm:text-lg"
              >
                Log In
              </Link>
            </div>
            {/* Footer ends */}
          </div>
        </form>
      </div>

      {resetPassword.isPending && <Spinner />}   

    </div>
  );
};

export default reset_password;
