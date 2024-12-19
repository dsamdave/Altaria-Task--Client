import Image from "next/image";
import React from "react";

interface IProp {
  setLoginModal: (loginModal: boolean) => void;
  setForgotPassModal: (forgotPassModal: boolean) => void;
  // handleLoginModal: () => void;
}

const ForgotPasswordnModal: React.FC<IProp> = ({
  setLoginModal,
  setForgotPassModal,
}) => {
  return (
    <div className="modal-overlay">
      <div className="mobottomdalfade" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content border-0">
            <div className="modal-body p-3 d-flex align-items-center bg-none">
              <div className="card shadow-none rounded-0 w-100 p-2 pt-3 border-0">
                <div className="card-body rounded-0 text-left pt-0">
                  <div className="flex items-center justify-between h-screen bg-blue-500"
                  style={{
                    display: "flex",
                    alignItems: 'center',
                    justifyContent: 'space-between'

                  }}
                  >
                    <h2 className="fw-600 display2-size mb-4">
                      Recover
                      <br /> password
                    </h2>
                    <h1
                      onClick={() => setForgotPassModal(false)}
                      className="text-danger cursor-pointer shrink"
                      style={{
                        cursor: "pointer"
    
                      }}
                    >
                      X
                    </h1>
                  </div>
                  <form>
                    <div className="form-group mb-3">
                      <input
                        type="email"
                        className="form-control h60 border-2 bg-color-none text-grey-700"
                        placeholder="Email"
                      />
                    </div>
                  </form>
                  <div className="col-sm-12 p-0 text-center">
                    <button className="shrink form-control h60 bg-current  text-white font-xss fw-500 border-2 border-0 p-0">
                      Submit
                    </button>
                    <h6 className="text-grey-500 font-xsss fw-500 mt-2 mb-4 lh-32">
                      Dont have account?{" "}
                      <a
                        href="#"
                        className="shrink fw-700 ml-1"
                        onClick={() => {
                          setForgotPassModal(false);
                          setLoginModal(true);
                        }}
                      >
                        Login
                      </a>
                    </h6>
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

export default ForgotPasswordnModal;
