"use client";

import React, { useState } from "react";
import LoginModal from "../Modals/LoginModal";
import RegisterModal from "../Modals/RegisterModal";
import ForgotPasswordnModal from "../Modals/ForgotPasswordModal";
import Link from "next/link";

const HeaderComp = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registerModal, setRegisterModal] = useState(false);
  const [forgotPassModal, setForgotPassModal] = useState(false);

  return (
    <div>
      {/* <div className="upper-header bg-greylight">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-xs-6 d-none d-block-md">
              <ul className="list-inline list-item-style mt-0 float-left pl-1">
                <li className="list-inline-item pl-0">
                  <Link href="#">(+1)866-540-3229</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-6 col-xs-6 d-none d-block-md">
              <ul className="list-inline list-item-style mt-0 float-right">
                <li className="list-inline-item">
                  <Link href="#">
                    <i className="ti-user mr-2"></i> My Account
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-12 d-none d-lg-block">
              <ul className="list-inline list-item-style mt-0 float-left pl-1">
                <li className="list-inline-item pl-0">
                  <Link href="#">BECOME AN AGENT</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="#">PRIVACY</Link>
                </li>
                <li className="list-inline-item">
                  <Link href="#">CUSTOMER SERVICE</Link>
                </li>
              </ul>
              <ul className="list-inline list-item-style mt-0 float-right">
                <li className="list-inline-item">
                  <Link href="#">
                    <i className="ti-location-pin mr-2"></i> Store Locator
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link href="#">
                    <i className="ti-user mr-2"></i> My Account
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}

      <div className="header-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 navbar">
              <Link href="index.html" className="logo">
                <h1 className="fredoka-font ls-3 fw-700 text-current display1-size">
                  OrderPay
                </h1>
              </Link>
              <button
                className="navbar-toggler"
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
                    <Link href="/" className="nav-link">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      data-toggle="dropdown"
                    >
                      {" "}
                      Pay Bills <i className="ti-angle-down"></i>
                    </a>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" href="/bills/airtime/select">
                        Airtime
                      </Link>
                      <Link className="dropdown-item" href="#">
                        Data
                      </Link>
                      <Link className="dropdown-item" href="#">
                        Cable TV
                      </Link>
                      <Link className="dropdown-item" href="#">
                        Electricity
                      </Link>
                    </div>
                  </li>

                  <li className="nav-item">
                    <Link href="/coming-soon" className="nav-link">
                      Decoders & Inverters
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/aboutus" className="nav-link">
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="/contact" className="nav-link">
                      Contact
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
                BROWSE CATEGORIES <i className="ti-menu float-right"></i>
              </Link>
            </div>
            <div className="col-md-9 text-right">
              <Link
                href="tel:(+1)866-540-3229"
                className="pb-3 pt-3 fw-500 font-xsss text-white d-block"
              >
                Call us toll free: (+1)866-540-3229
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* <LoginModal /> */}

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
  );
};

export default HeaderComp;
