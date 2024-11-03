import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/Universal/CustomButton";
import CustomInput from "@/components/Universal/CustomInput";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { useApiMutation } from "@/lib/useApi";
import Spinner from "@/components/Universal/Spinner";
import Toast from "@/components/Universal/Toast";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { addCurrentUser } from "@/redux/slices/authSlice";
import { IUser } from "@/utilities/typings";
import { validateUserLogin } from "@/utilities/validations/authValids";


interface ILoginResponse {
    accessToken: string;
    refreshToken: string;
    user: IUser;
  }
  
  export interface ILoginVariables {
    identifier: string;
    password: string;
  }

const login = () => {

    const router = useRouter();
    const dispatch = useAppDispatch();

    const { currentUser } = useAppSelector((state) => state.auth);
  
    const login = useApiMutation<ILoginResponse, ILoginVariables>("/login");
  
    const [formValues, setFormValues] = useState({
      email: "",
      password: "",
    });



    const handleInputChange = (fieldName: string, value: string) => {
        setFormValues({
          ...formValues,
          [fieldName]: value,
        });
      };

      useEffect(() => {
        const { accessToken, role } = currentUser || {};
    
        if (accessToken && role === "admin") {
          router.push("/dashboard/hospitaldb/homedb");
        }
      }, [currentUser, router]);


      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        const result = validateUserLogin({
          password: formValues.password,
          identifier: formValues.email,
        });
    
        if (result.errLength) {
          // setLoading(false);
          return toast.error(() => <Toast title="Error" body={result.errMsg} />);
        }
    
        if (!formValues.email) {
          return toast.error("Please add an email");
        }
        if (!formValues.password) {
          return toast.error("Please add a password");
        }
    
        login.mutate(
          { identifier: formValues.email, password: formValues.password },
          {
            onSuccess: (data: ILoginResponse) => {
              toast.success("Login successful!");
              // console.log('Login data:', data);
              dispatch(
                addCurrentUser({
                  ...data?.user,
                  accessToken: data?.accessToken,
                })
              );
              if (data?.user?.role === "admin") {
                  router.push("/dashboard/hospitaldb/homedb");

                } else if (data?.user?.role === "patient" || data?.user?.role === "user" )  {
                // router.push("/dashboard/hospitaldb/homedb");
                // router.push("/");
              } else {
                return 
              }
    
              setFormValues({
                email: "",
                password: "",
              });
            },
            onError: (error: any) => {
              toast.error(() => (
                <Toast
                  title="Login failed:"
                  body={error?.response?.data?.message || "Unknown error"}
                />
              ));
            },
          }
        );
      };




  return (
    <div className="lg:flex lg:items-stretch h-full" style={{ height: "100vh" }}>
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
      
      <div className="bg-white w-full flex items-center justify-center  p-6 lg:px-0 "
      style={{ height: "100vh" }}
      >
        <form onSubmit={handleSubmit} className=" shadow-xl p-3 sm:w-[550px] sm:p-10 ">
          <h1 className="text-lg  font-bold text-[#1E2230] lg:text-3xl">
            Login to your Account
          </h1>

          <p className="text-sm lg:text-lg text-[#8692A6] font-bold mt-3">
            Please Login to access your account
          </p>

          <div className="m-auto mt-5 lg:mt-10 w-full ">
            {/* FORM FIELDS */}
          
              <CustomInput
                label="Email Address or Phone Number"
                placeholder="Email or Phone Number"
                type="text"
                value={formValues.email}
                onChange={(value) => handleInputChange("email", value)}
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
              <div className="mb-10 mt-3 flex items-center justify-between">
                {/* Checkbox */}
                <div className="flex items-center gap-1">
                  <input type="checkbox" name="" id="" />{" "}
                  <span className="text-xs font-normal text-[#898A8C] sm:text-base">
                    {" "}
                    Remember me
                  </span>
                </div>
                {/* Checkbox ends here */}
                <Link
                  className="shrink text-sm font-semibold text-primary-green sm:text-base text-[#F87171]"
                  href={"/forgot-password"}
                >
                  Forgot Password?
                </Link>
              
            </div>
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
                Don’t have an account?{" "}
              </p>
              <Link
                href={"/signup"}
                className="shrink cursor-pointer border-0 text-center text-sm font-medium text-[#1E2230] sm:text-lg"
              >
                Sign Up
              </Link>
            </div>
            {/* Footer ends */}
          </div>
        </form>
      </div>

      {login.isPending && <Spinner />}

    </div>
  );
};

export default login;
