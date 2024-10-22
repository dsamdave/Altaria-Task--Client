import React, { useState, useEffect } from "react";
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



const Index = () => {
  const router = useRouter();
  const dispatch = useAppDispatch()

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
    const handleResize = () => {
      const isMobile = window.innerWidth <= 768;
      if (isMobile) {
        toast.error(
          "Please open this dashboard on a computer for a better experience."
        );
        router.push("/");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const { accessToken, role } = currentUser || {};

    if (accessToken && role === "admin") {
      router.push("/dashboard/hospitaldb/homedb");
    }
  }, [currentUser, router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = validateUserLogin({password: formValues.password, identifier: formValues.email});

    if (result.errLength) {
      // setLoading(false);
      return toast.error(() => <Toast title="Error" body={result.errMsg} />);
    }

    if(!formValues.email){
      return toast.error("Please add an email")
    }
    if(!formValues.password){
      return toast.error("Please add a password")
    }
    
    login.mutate({identifier: formValues.email, password: formValues.password}, {
      onSuccess: (data: ILoginResponse) => {

        toast.success("Login successful!");
        // console.log('Login data:', data);
        dispatch(
          addCurrentUser({
            ...data?.user,
            accessToken: data?.accessToken,     
          })
        ); 
        if(data?.user?.role !== "admin"){
          toast.error("Please log in as admin!");
          router.push("/");
        } else {
          
          router.push("/dashboard/hospitaldb/homedb");
        }      
        
        setFormValues({
          email: "",
          password: "",
        });
      },
      onError: (error: any) => {
        toast.error(() => <Toast title="Login failed:" body={error?.response?.data?.message || "Unknown error"} />);
      },
    });
  };

  return (
    <div className="flex items-stretch h-full" style={{ height: "100vh" }}>
      <div className="bg-[#1E2230] w-full sm:w-[800px]">
        <div className="mt-20 px-10">
          <Image
            src={"/new_logo.svg"}
            width={200}
            height={200}
            alt="Logo"
            className="mb-20"
          />
          <h1 className="mb-20 text-4xl text-white font-bold mt-3">
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

      <div className="bg-white w-full flex items-center justify-center">
        <form className="" onSubmit={handleSubmit}>
          <h1 className="text-[32px] font-bold text-[#1E2230] lg:text-3xl">
            Login to your Account
          </h1>

          <p className="text-lg text-[#8692A6] font-bold mt-3">
            Please Login to access your account
          </p>

          <div className="m-auto mt-10 w-full sm:w-[550px]">
            {/* FORM FIELDS */}
            <div className="mt-12">
              <CustomInput
                label="Email Address"
                placeholder="Email Address"
                type="email"
                value={formValues.email}
                onChange={(value) => handleInputChange("email", value)}
                className="w-full bg-transparent"
              />

              <div className="mt-7">
                <CustomInput
                  label="Password"
                  placeholder="Password"
                  type="password"
                  value={formValues.password}
                  onChange={(value) => handleInputChange("password", value)}
                  showPasswordToggle
                  className="w-full"
                />
              </div>
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
                  className="text-sm font-semibold text-primary-green sm:text-base"
                  href={""}
                >
                  Forgot Password?
                </Link>
              </div>
            </div>
            <CustomButton
              className={`rounded-[5px] p-[10px] text-center 
           bg-[#1E2230]
             
          w-full border-0 text-lg font-bold text-white shrink border-transparent`}
              btnText={"Login"}
              greenBorder={false}
              whiteBorder={false}
              type="submit"
            />
            {/* Footer */}
            <div className="mt-3 flex items-center justify-center gap-1">
              <p className="text-lg font-normal text-[#5C5C5C]">
                Don’t have an account?{" "}
              </p>
              <Link
                href={""}
                className="shrink ml-1 cursor-pointer border-0 text-center text-base font-bold text-[#1E2230] sm:text-lg"
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

export default Index;
