import React, { useState, ChangeEvent, FormEvent } from "react";
import { useApiMutation } from "@/lib/useApi";
import { validateUserRegister } from "@/utilities/validations/authValids";
import { toast } from "react-toastify";
import Toast from "@/components/Universal/Toast";
import Spinner from "@/components/Universal/Spinner";

interface IProp {
  setLoginModal: (loginModal: boolean) => void;
  setRegisterModal: (registerModal: boolean) => void;
}

interface FormData {
  email: string;
  password: string;
  phoneNumber: string;
  confirmPassword: string;
}

interface IResponse {
  statusCode: number;
  status: boolean;
  message: string;
  data: {
    accessToken: string;
    //  user: IUser;
  };
}

export interface IVariables {
  phoneNumber: string
  email: string
  password: string
}

const RegisterModal: React.FC<IProp> = ({
  setLoginModal,
  setRegisterModal,
}) => {
  const [formData, setFormData] = useState<FormData>({
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const signup = useApiMutation<IResponse, IVariables>("/register");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = validateUserRegister(formData);

    if (result.errLength) {
      return toast.error(() => <Toast title="Error" body={result.errMsg} />);
    }

    signup.mutate(formData, {
      onSuccess: (data: IResponse) => {
        if (data?.message === "Successful") {
          toast.success("Registration Succesful. Please login!");
          
          setLoginModal(true)
          
        } else {
          return;
        }
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
    <div className="modal-overlay">
      <div className="mobottomdalfade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content border-0">
            <div className="modal-body p-3 d-flex align-items-center bg-none">
              <div className="card shadow-none rounded-0 w-100 p-2 pt-3 border-0">
                <div className="card-body rounded-0 text-left pt-0">
                  <div
                    className="flex items-center justify-center h-screen bg-blue-500"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <h2 className="fw-600 display2-size mb-4">
                      Register
                      {/* <br /> your account */}
                    </h2>
                    <h1
                      onClick={() => setRegisterModal(false)}
                      className="text-danger shrink"
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      X
                    </h1>
                  </div>
                  <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Phone Number"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-group icon-tab mb-3">
                      <input
                        type="password"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Password"
                      />
                      <i className="ti-lock text-grey-700 pr-0"></i>
                    </div>
                    <div className="form-group icon-tab mb-3">
                      <input
                        type="password"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Confirm Password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <i className="ti-lock text-grey-700 pr-0"></i>
                    </div>

                    <div className="col-sm-12 p-0 text-center">
                      <button
                        type="submit"
                        className="shrink form-control h60 bg-current  text-white font-xss fw-500 border-2 border-0 p-0"
                      >
                        Create an account
                      </button>
                      <h6 className="text-grey-500 font-xsss fw-500 mt-2 mb-4 lh-32">
                        Are you already a member?{" "}
                        <a
                          href="#"
                          className="fw-700 ml-1"
                          onClick={() => {
                            setRegisterModal(false);
                            setLoginModal(true);
                          }}
                        >
                          Login
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

      {signup.isPending && <Spinner />}

    </div>
  );
};

export default RegisterModal;
