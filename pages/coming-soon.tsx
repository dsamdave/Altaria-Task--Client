import React from "react";

const ComingSoon = () => {
  return (
    <div
      className="main-wrapper vh-100 bg-image-cover bg-image-center coming-soon-bg"
      style={{
        backgroundImage: `url("/images/coming-soon.jpg")`,
        // backgroundImage: `url("/images/bg-41.jpg")`,
      }}
    >
      <div className="commingsoon-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-10 vh-100 align-items-center d-flex rounded-lg overflow-hidden">
              <div className="card w-100 bg-transparent border-0">
                <div className="card-body bg-transparent p-0">
                  <h4 className="text-white font-sm font-sm-size mont-font ml-2">
                    New Surprises are here
                  </h4>
                  <h2 className="text-white fw-900 ls-3 mont-font display5-size display5-size-sm">
                    COMING SOON{" "}
                  </h2>
                  <div className="timer style3 mt-5 rounded-lg "></div>
                  <form
                    action="#"
                    className="w-100 float-left mt-5 rounded-lg overflow-hidden"
                  >
                    <input
                      type="text"
                      className="border-1 bg-white form-control w-xs-100 mb-xs-2 w-75 rounded-0 h60 float-left"
                      placeholder="Enter your email address.."
                    />
                    <button className="border-0 bg-current text-white h60 form-control p-0 w-xs-100  rounded-0 float-left d-block w-25 font-xsss">
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
