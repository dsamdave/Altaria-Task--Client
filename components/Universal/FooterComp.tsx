import Link from "next/link";
import React from "react";

const FooterComp = () => {
  return (
    <div className="footer-wrapper bg-dark mt-0">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="row">
              <div className="col-md-12 col-lg-4 col-sm-9 col-xs-12 md-mb25">
                <Link href="index.html" className="logo">
                  <h1 className="fredoka-font ls-3 fw-700 text-current display1-size">
                    Event Task
                  </h1>
                </Link>
              </div>
            </div>
            <div className="middle-footer mt-5 pt-4"></div>
          </div>
          <div className="col-sm-12 lower-footer pt-0"></div>
          <div className="col-sm-6 col-xs-12">
            <p className="copyright-text">
              © {new Date().getFullYear()} copyright. All rights reserved.
            </p>
          </div>
          <div className="col-sm-6 col-xs-12 text-right">
            <p className="copyright-text float-right">
              Design by{" "}
              <a href="#" className="">
                David Sampson
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterComp;
