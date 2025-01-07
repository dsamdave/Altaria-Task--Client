import SideBarComp from "@/components/Universal/SideBarComp";
import Link from "next/link";
import React from "react";

const DoneAirtimePage = () => {
  return (
    <div className="open-font main-wrapper">
      <div className="online bg-lightgrey-after pb-7 pt-3 position-relative">
        <div className="container">
          <div className="row">
            {/* Aside */}
            <SideBarComp />

            <div className="col-lg-9 pl-md--2 pr-md--2 mt-sm--3">
             

              <div className="member-3"  >
                <div className="card dark-card bg-white shadow-xs p-4 text-center border-0">
                  <div className="card-body">
                    {/* Sucess */}
                    {/* <i className="shrink ti-check btn-round-xxxl text-white bg-success display3-size mt-5 shadow-lg"></i> */}
                    {/* <h2 className="fw-900 display1-size mb-2 lh-3 mt-4">
                      Done{" "}
                    </h2> */}

                    {/* Failed */}
                    <i className="shrink ti-close btn-round-xxxl text-white bg-danger display3-size mt-5 shadow-lg"></i>
                    <h2 className="fw-900 display1-size mb-2 lh-3 mt-4">
                      Failed{" "}
                    </h2>
                    <p className="font-xsss text-grey-500 pl-3 pr-3">
                      We con't seem to find the page you are looking for...
                    </p>
                    <Link
                      href="/"
                      className="shrink mt-3 mb-5 border-0 w200 bg-current pt-2 pb-2 lh-32 text-white fw-600 rounded-lg d-inline-block btn-light font-xsss ls-3 text-uppercase"
                    >
                      Continue
                    </Link>
                  </div>
                </div>
                <div className="card w-100 bg-greylight shadow-none rounded-lg border-0 mt-3">
                  <div className="card-body w-100 p-4 border-0">
                    <h4 className="mb-0 float-left font-xssss text-grey-700 mt-1 fw-300 mb-0">
                      <i className="ti-reload text-success mr-2"></i> 100%
                      Secure Payments Powered by Flutterwave
                    </h4>
                    <img
                      src="/images/payment-logo.png"
                      alt="icon"
                      className="float-right w250"
                    />
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

export default DoneAirtimePage;
