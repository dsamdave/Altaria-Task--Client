import Spinner from "@/components/Universal/Spinner";
import { useApiMutation } from "@/lib/useApi";
import { addCurrentUser } from "@/redux/slices/authSlice";
import { useAppDispatch } from "@/redux/store";
import { IUser } from "@/utilities/typings";
import Image from "next/image";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { Toast } from "react-toastify/dist/components";

interface IProp {
  setLoginModal: (loginModal: boolean) => void;
  setRegisterModal: (registerModal: boolean) => void;
  setForgotPassModal: (forgotPassModal: boolean) => void;
}

interface IResponse {
  statusCode: number,
  status: boolean,
  message: string,
  data: { 
    accessToken: string;
     user: IUser; 
    },
}

export interface IVariables {
  identifier: string;
  password: string;
}

const LoginModal: React.FC<IProp> = ({ setLoginModal, setRegisterModal, setForgotPassModal }) => {

  const dispatch = useAppDispatch();

  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');

  const login = useApiMutation<IResponse, IVariables>("/login");




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!identifier) {
      return toast.error("Please add an email or phone number");
    }
    if (!password) {
      return toast.error("Please add a password");
    }


    login.mutate(
      { identifier, password },
      {
        onSuccess: (data: IResponse) => {
          toast.success("Login successful!");
          console.log('Login data:', data);
          
          dispatch(
            addCurrentUser({
              ...data?.data.user,
              accessToken: data?.data?.accessToken,
            })
          );


          setLoginModal(false)
        },
        onError: (error: any) => {
          toast.error("Login failed:");
        },
      }
    );
  };



  return (
  

    <div className="modal-overlay">
      <div className="mobottomdalfade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content border-0">
            
            <div className="modal-body p-3 d-flex align-items-center bg-none">
              <div className="card shadow-none rounded-0 w-100 p-2 pt-3 border-0">
                <div className="card-body rounded-0 text-left pt-0">
                  <div className="flex items-center justify-center h-screen bg-blue-500"
                  style={{
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'space-between'

                  }}
                  >
                    <h2 className="fw-600 display2-size mb-4">
                    Login 
                    

                  

                    </h2>
                    <h1 onClick={()=> setLoginModal(false)} className="text-danger shrink"
                    style={{
                      cursor: "pointer"
  
                    }}
                      >
                      X
                    </h1>
                  </div>
                  <form onSubmit={handleSubmit}>
                    
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Email or Phone number"
                        value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
                      />
                    </div>
                    <div className="form-group icon-tab mb-3">
                      <input
                        type="password"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Password"
                        value={password}
          onChange={(e) => setPassword(e.target.value)}
                      />
                      <i className="ti-lock text-grey-700 pr-0"></i>
                    </div>

                    <h6 className=" text-danger font-xsss fw-500 mt-2 mb-4 lh-32"
                    style={{
                      textAlign: "end"
                    }}
                    >
                      
                      <a href="#" className="shrink text-danger fw-700 ml-1"
                      onClick={()=>{
                        setLoginModal(false)
                        setForgotPassModal(true)
                      }}
                      >
                        Forgot Password?
                      </a>
                    </h6>
                   
                  <div className="col-sm-12 p-0 text-center">
                    <button type="submit" className="shrink form-control h60 bg-current  text-white font-xss fw-500 border-2 border-0 p-0">
                     Login
                    </button>
                    <h6 className="text-grey-500 font-xsss fw-500 mt-2 mb-4 lh-32">
                    Dont have account?{" "}
                      <a href="#" className="shrink fw-700 ml-1"
                      onClick={()=>{
                        setLoginModal(false)
                        setRegisterModal(true)
                      }}
                      >
                       Register
                      </a>
                    </h6>
                  
                  </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {login.isPending && <Spinner />}

    </div>
  );
};

export default LoginModal;
