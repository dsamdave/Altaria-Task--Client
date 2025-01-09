"use client";

import React, { useEffect, useState } from "react";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";
import ForgotPasswordnModal from "../Modals/ForgotPasswordModal";
import Link from "next/link";
import { useAppSelector } from "@/redux/store";

const HeaderComp = () => {

  const { currentUser } = useAppSelector((state) => state.auth);

  const [isClient, setIsClient] = useState(false);
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [forgotPassModal, setForgotPassModal] = useState(false);

  useEffect(()=>{
    setIsClient(true)
  }, [])

  return (
    <>
    {
      isClient ? (
    <div>
      <div className="header-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 navbar">
              <Link href="/" className="shrink logo">
                <h1 className="fredoka-font ls-3 fw-700 text-current display1-size">
                  Event Task
                </h1>
              </Link>
              <button
                className="shrink navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav nav-menu float-none text-center">
                  <li className="nav-item">
                    <Link href="/" className="shrink nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item" onClick={() => setLoginModal(true)}>
                    <Link href="#" className="shrink nav-link">
                    Login
                    </Link>
                  </li>
                  <li className="nav-item" onClick={() => setRegisterModal(true)}>
                    <Link href="#" className="shrink nav-link">
                    Register
                    </Link>
                  </li>
                  
                </ul>
              </div>
            </div>
            <div className="col-lg-4 text-right">
              <button
                className="shrink header-btn bg-dark fw-500 text-white font-xssss mr-2"
                onClick={() => setLoginModal(true)}
              >
                Login
              </button>
              <Link
                href="#"
                className="shrink header-btn bg-current fw-500 text-white font-xssss"
                onClick={() => setRegisterModal(true)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div
        className="header-wrapper bg-dark shadow-none d-none d-lg-block p-0"
        style={{ height: "53px" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-3 text-left pr-2">
              <Link
                href="#"
                className="bg-current p-3 w-100 fw-600 text-white ls-3 font-xssss d-inline-block"
              >
                Welcome  {currentUser?.email || "Dear User"}
              </Link>
            </div>
            <div className="col-md-9 text-right">
              <Link
                href="tel:(+1)866-540-3229"
                className="pb-3 pt-3 fw-500 font-xsss text-white d-block"
              >
                Call me +234 8188251329
              </Link>
            </div>
          </div>
        </div>
      </div>

      {loginModal && (
        <LoginModal
          setRegisterModal={setRegisterModal}
          setLoginModal={setLoginModal}
          setForgotPassModal={setForgotPassModal}
        />
      )}
      {registerModal && (
        <RegisterModal
          setRegisterModal={setRegisterModal}
          setLoginModal={setLoginModal}
        />
      )}
      {forgotPassModal && (
        <ForgotPasswordnModal
          setForgotPassModal={setForgotPassModal}
          setLoginModal={setLoginModal}
        />
      )}
    </div>

      ) : null
    }
    </>
  );
};

export default HeaderComp;
