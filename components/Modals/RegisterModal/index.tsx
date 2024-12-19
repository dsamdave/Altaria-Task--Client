import Image from "next/image";
import React from "react";

interface IProp {
  setLoginModal: (loginModal: boolean) => void;
  setRegisterModal: (registerModal: boolean) => void;
}

const RegisterModal: React.FC<IProp> = ({ setLoginModal, setRegisterModal }) => {
  return (
    

    <div className="modal-overlay" >
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
                    Register 
                    {/* <br /> your account */}
                  </h2>
                  <h1 onClick={()=> setRegisterModal(false)} className="text-danger shrink"
                  style={{
                    cursor: "pointer"

                  }}
                    >X</h1>
                  </div>
                  <form>
                    <div className="form-group mb-3">
                      <input
                        type="text"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Email"
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
                      />
                      <i className="ti-lock text-grey-700 pr-0"></i>
                    </div>
                  </form>
                  <div className="col-sm-12 p-0 text-center">
                    <button className="shrink form-control h60 bg-current  text-white font-xss fw-500 border-2 border-0 p-0">
                      Create an account
                    </button>
                    <h6 className="text-grey-500 font-xsss fw-500 mt-2 mb-4 lh-32">
                      Are you already a member?{" "}
                      <a href="#" className="fw-700 ml-1"
                      onClick={()=>{
                        setRegisterModal(false)
                        setLoginModal(true)
                      }}
                      >
                        Login
                      </a>
                    </h6>
                    {/* <div className="row">
                      <div className="col-6 pr-1">
                        <a
                          href="#"
                          className="form-control h60 p-0 pl-5 bg-lightblue text-grey-700 border-2 border-0 font-xssss fw-600 text-left position-relative"
                        >
                          <Image
                            src="/images/icon-facebook.png"
                            width={30}
                            height={30}
                            alt="Facebook"
                            style={{
                              position: "absolute",
                              left: "10px",
                              top: "15px",
                            }}
                          />
                          Connect with Facebook
                        </a>
                      </div>
                      <div className="col-6 pl-1">
                        <a
                          href="#"
                          className="form-control h60 p-0 pl-5 bg-lightblue text-grey-700 border-2 border-0 font-xssss fw-600 text-left position-relative"
                        >
                          <Image
                            src="/images/google-icon.png"
                            width={30}
                            height={30}
                            alt="google"
                            style={{
                              position: "absolute",
                              left: "10px",
                              top: "15px",
                            }}
                          />
                          Connect with Google
                        </a>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
