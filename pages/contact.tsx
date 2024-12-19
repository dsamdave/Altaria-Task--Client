import React from "react";

const ContactPage = () => {
  return (
    <div>

          <div className="parallax-wrapper pb-7 pt-7" style={{backgroundImage: 'url("/images/parallax.jpg")'}} >
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 offset-lg-3 text-center">
                      <h2 className="text-white fw-600 display2-size display2-size-sm">Contact Us</h2>
                      <p className="text-grey-400 font-xsss mb-4">Write something to us</p>
                     
                  </div>
              </div>
          </div>
      </div>


      <div className="section">
        <div
          id="map"
          className="rounded-lg overflow-hidden"
          style={{ height: "150px" }}
        ></div>
      </div>

      <div className="map-wrapper pb-7">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="contact-wrap bg-white shadow-lg rounded-lg position-relative">
                <h1 className="text-grey-900 fw-700 display3-size mb-5 lh-1">
                  Contact us
                </h1>
                <form action="#">
                  <div className="row">
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control h60 bg-color-none text-grey-700"
                          value="Name"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                      <div className="form-group mb-3">
                        <input
                          type="text"
                          className="form-control h60 bg-color-none text-grey-700"
                          value="Email"
                        />
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group mb-3 md-mb25">
                        <textarea className="w-100 h125 p-3 form-control">
                          Message
                        </textarea>
                      </div>
                      <div className="form-check text-left mt-3 float-left md-mb25">
                        <input
                          type="checkbox"
                          className="form-check-input mt-2"
                          id="exampleCheck1"
                        />
                        <label
                          className="form-check-label font-xsss text-grey-500 fw-500"
                          htmlFor="exampleCheck1"
                        >
                          I agree to the term of this{" "}
                          <a href="#" className="text-grey-600 fw-600">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                      <button
                        className="shrink form-control rounded-lg h60 float-right bg-current text-white text-center font-xss fw-500 border-2 border-0 p-0 w175"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            
            <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
              <div className="row">
                <div className="col-lg-4 col-md-4 md-mb25">
                  <h4 className="text-grey-900 fw-600 font-xl ls-2">London</h4>
                  <h5 className="font-xsss lh-24 fw-500 text-grey-500 mt-4">
                    41 madison ave, floor 24 <br /> New Work,
                  </h5>
                  <div className="w30 border-bottom mt-4 mb-4"></div>
                  <h5 className="font-xsss lh-24 fw-500 text-grey-500 mt-4 mb-0">
                    +4232 4234 3232
                  </h5>
                  <h5 className="font-xsss lh-24 fw-500 text-grey-500 mt-0">
                    support@mail.com
                  </h5>
                </div>

                <div className="col-lg-4 col-md-4 md-mb25">
                  <h4 className="text-grey-900 fw-600 font-xl ls-2">Paris</h4>
                  <h5 className="font-xsss lh-24 fw-500 text-grey-500 mt-4">
                    41 madison ave, floor 24 <br /> New Work,
                  </h5>
                  <div className="w30 border-bottom mt-4 mb-4"></div>
                  <h5 className="font-xsss lh-24 fw-500 text-grey-500 mt-4 mb-0">
                    +4232 4234 3232
                  </h5>
                  <h5 className="font-xsss lh-24 fw-500 text-grey-500 mt-0">
                    support@mail.com
                  </h5>
                </div>

                <div className="col-lg-4 col-md-4 md-mb25">
                  <h4 className="text-grey-900 fw-600 font-xl ls-2">Beijing</h4>
                  <h5 className="font-xsss lh-24 fw-500 text-grey-500 mt-4">
                    41 madison ave, floor 24 <br /> New Work,
                  </h5>
                  <div className="w30 border-bottom mt-4 mb-4"></div>
                  <h5 className="font-xsss lh-24 fw-500 text-grey-500 mt-4 mb-0">
                    +4232 4234 3232
                  </h5>
                  <h5 className="font-xsss lh-24 fw-500 text-grey-500 mt-0">
                    support@mail.com
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
