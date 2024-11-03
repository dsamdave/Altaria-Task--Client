import React, { useState } from "react";
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

interface ILoginResponse {
  message: string;
  refreshToken: string;
  // user: IUser;
}

export interface ISignUpVariables {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  password: string;
  country: string;
}

const Index = () => {
  const router = useRouter();

  const signup = useApiMutation<ILoginResponse, ISignUpVariables>("/register");

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    country: "",
  });

  const handleInputChange = (fieldName: string, value: string) => {
    setFormValues({
      ...formValues,
      [fieldName]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = validateUserRegister(formValues);

    if (result.errLength) {
      return toast.error(() => <Toast title="Error" body={result.errMsg} />);
    }

    signup.mutate(formValues, {
      onSuccess: (data: ILoginResponse) => {
        if (data?.message === "Successful") {
          toast.success("Registration Succesful.");
          router.push({
            pathname: "/verify-otp",
            query: { email: formValues.email },
          });
          
        } else {
          return;
        }

        setFormValues({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          password: "",
          country: "",
        });
      },
      onError: (error: any) => {
        toast.error(() => (
          <Toast
            title="Sign up failed:"
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

      <div className="bg-white w-full flex items-center justify-center p-6 lg:px-0 ">
        <form
          onSubmit={handleSubmit}
          className=" shadow-xl p-3 sm:w-[550px] sm:p-10 "
        >
          <h1 className="text-lg  font-bold text-[#1E2230] lg:text-3xl">
            Create Account
          </h1>

          <p className="text-sm lg:text-lg text-[#8692A6] font-bold mt-3">
            Please enter the following details to create your account{" "}
          </p>

          <div className="m-auto mt-5 lg:mt-10 w-full ">
            {/* FORM FIELDS */}
            <div className="flex items-center justify-between flex-wrap ">
              <CustomInput
                label="First Name"
                placeholder="First Name"
                type="text"
                value={formValues.firstName}
                onChange={(value) => handleInputChange("firstName", value)}
                className2="w-full bg-transparent"
                className="mt-4 w-full sm:w-auto"
              />

              <CustomInput
                label="Last Name"
                placeholder="Last Name"
                type="text"
                value={formValues.lastName}
                onChange={(value) => handleInputChange("lastName", value)}
                className2="w-full bg-transparent"
                className="mt-4 w-full sm:w-auto"
              />
            </div>
            <CustomInput
              label="Email Address"
              placeholder="Email Address"
              type="email"
              value={formValues.email}
              onChange={(value) => handleInputChange("email", value)}
              className2="w-full bg-transparent"
              className="mt-4"
            />
            <CustomInput
              label="Phone Number"
              placeholder="Phone Number"
              type="tel"
              value={formValues.phoneNumber}
              onChange={(value) => handleInputChange("phoneNumber", value)}
              className2="w-full bg-transparent"
              className="mt-4"
            />
            <CustomInput
              label="Password"
              placeholder="Password"
              type="password"
              value={formValues.password}
              onChange={(value) => handleInputChange("password", value)}
              showPasswordToggle
              className2="w-full"
              className="mt-4"
            />
            <CustomInput
              label="Country"
              placeholder="Country"
              type="text"
              value={formValues.country}
              onChange={(value) => handleInputChange("country", value)}
              showPasswordToggle
              className2="w-full"
              className="mt-4"
            />

            <CustomButton
              className={`rounded-[5px] p-[10px] text-center 
           bg-[#1E2230] w-full border-0 text-lg font-bold text-white shrink border-transparent mt-8`}
              btnText={"Sign up"}
              greenBorder={false}
              whiteBorder={false}
              type="submit"
            />
            {/* Footer */}
            <div className="mt-3 flex items-center justify-center gap-1">
              <p className="text-sm font-normal text-[#5C5C5C]">
                Already have an account?
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

      {signup.isPending && <Spinner />}
    </div>
  );
};

export default Index;
