import SideBarComp from "@/components/Universal/SideBarComp";
import { useRouter } from "next/router";
import React from "react";

const OrderAirtimePage = () => {
  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    router.push("/bills/airtime/summary");
  };

  return (
    <div className="open-font main-wrapper">
      <div className="online bg-lightgrey-after pb-7 pt-3 position-relative">
        <div className="container">
          <div className="row">
            {/* Aside */}
            <SideBarComp />

            <div className="col-lg-9 pl-md--2 pr-md--2 mt-sm--3">
              <div className="bg-white shadow-xs rounded-lg h-100 p-4 member-1">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="payment-option bg-white">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 mb-3 text-left">
                            <i className="ti-shopping-cart text-grey-900 display1-size float-left mr-3"></i>
                            <h4 className="fw-700 font-xxl mb-3">
                              MTN Recharge
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 mb-4">
                      <div className="custom-control mr-4 custom-radio custom-control-inline">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="customRadio"
                          name="example"
                          value="customEx"
                        />
                        <label
                          className="custom-control-label small-size fw-500 text-grey-900 font-xsss"
                          htmlFor="customRadio"
                        >
                          Postpaid
                        </label>
                      </div>
                      <div className="custom-control mr-0 custom-radio custom-control-inline">
                        <input
                          type="radio"
                          className="custom-control-input"
                          id="customRadio2"
                          name="example"
                          value="customEx"
                        />
                        <label
                          className="custom-control-label small-size fw-500 text-grey-900 font-xsss"
                          htmlFor="customRadio2"
                        >
                          Prepaid
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          First Name
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          Last Name
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-6 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          Email
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-6 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          Phone
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-12 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>

                    <div className="col-lg-12 mb-3">
                      <div className="form-gorup">
                        <label
                          className="mont-font fw-500 font-xsss"
                          htmlFor="comment-name"
                        >
                          Address
                        </label>
                        <input
                          type="text"
                          name="comment-name"
                          className="form-control"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row pt-3">
                    <div className="col-lg-12 mb-3">
                      <input
                        type="submit"
                        value="Proceed to Recharge"
                        title="Proceed to Recharge"
                        className="fw-500 shrink mt-2 d-block text-center bg-current border-0 w-100 form-bttn fw-500 rounded-lg text-white member-bttn2"
                        id="exampleCheck1"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="member-2" style={{ display: "none" }}>
                <div className="card w-100 shadow-xs rounded-lg border-0">
                  {/* <!-- <div className="card-body w-100 bg-greylight p-3 border-bottom"><a href="#" className="mb-0 text-grey-800 fw-500 font-xsss"><i className="ti-angle-left text-grey-800 dark-text-white font-xssss mr-1"></i> Go Back</a></div> --> */}
                  <div className="card-body w-100 p-4 border-0">
                    <h4 className="float-left fw-600 mb-0 font-sm text-grey-900">
                      Recharge or Bill payment Order <br />
                      <span className="font-xssss text-grey-500 fw-300">
                        Transaction ID: 12679624220
                      </span>
                    </h4>
                    {/* <!-- <h4 className="mb-0 float-right font-xl text-grey-900 mt-3 fw-600"><span className="font-xs">$</span> 129</b></h4>    --> */}
                  </div>
                </div>
                <div className="card mt-3 w-100 shadow-xs rounded-lg border-0">
                  <div className="card-body w-100 p-4 border-bottom">
                    <h4 className="mb-0 text-grey-500 fw-500 font-xsss">
                      SELECT AN OPTION TO PAY
                    </h4>
                  </div>
                </div>

                <div className="card bg-white border-0 shadow-xs">
                  <div className="card-body d-flex justify-content-between align-items-end p-4">
                    <div>
                      <h4 className="text-grey-700 mb-0 d-flex align-items-center justify-content-between mt-0 fw-600 lato-font font-xsss">
                        <img
                          src="images/b-10.png"
                          alt="image"
                          className="float-left mr-3"
                        />
                        4321 4432 6565 ****
                      </h4>
                    </div>
                    <div className="round float-right mb-2">
                      <input
                        id="radio-1"
                        className="radio-custom"
                        name="radio-group"
                        type="radio"
                      />
                      <label
                        htmlFor="radio-1"
                        className="radio-custom-label m-0"
                      ></label>
                    </div>
                  </div>
                </div>

                <div className="card bg-white shadow-xs border-0">
                  <div className="card-body d-flex justify-content-between align-items-end p-4">
                    <div>
                      <h4 className="text-grey-700 mb-0 d-flex align-items-center justify-content-between mt-0 fw-600 lato-font font-xsss">
                        <img
                          src="images/b-9.png"
                          alt="image"
                          className="float-left mr-3"
                        />
                        ***port@gmail.com
                      </h4>
                    </div>
                    <div className="round float-right mb-2">
                      <input
                        id="radio-2"
                        className="radio-custom"
                        name="radio-group"
                        type="radio"
                      />
                      <label
                        htmlFor="radio-2"
                        className="radio-custom-label m-0"
                      ></label>
                    </div>
                  </div>
                </div>

                <div className="card bg-white shadow-xs border-0">
                  <div className="card-body d-flex justify-content-between align-items-end p-4">
                    <div>
                      <h4 className="text-grey-700 mb-0 d-flex align-items-center justify-content-between mt-0 fw-600 lato-font font-xsss">
                        <img
                          src="images/b-11.png"
                          alt="image"
                          className="float-left mr-3"
                        />
                        6565 4321 4432 ****
                      </h4>
                    </div>
                    <div className="round float-right mb-2">
                      <input
                        id="radio-3"
                        className="radio-custom"
                        name="radio-group"
                        type="radio"
                      />
                      <label
                        htmlFor="radio-3"
                        className="radio-custom-label m-0"
                      ></label>
                    </div>
                  </div>
                </div>

                <div className="card w-100 bg-greylight shadow-none rounded-lg border-0 mt-3">
                  <div className="card-body w-100 p-4 border-0">
                    <h4 className="mb-0 float-left font-xxl text-grey-700 mt-0 fw-900">
                      <span className="font-xs">$</span> 129
                      <br />
                      <span className="font-xssss text-grey-500 fw-300 d-block">
                        inclusive tax*
                      </span>
                    </h4>
                    <a
                      href="#"
                      className="mt-0 btn lh-32 member-bttn3 rounded-lg ls-3 bg-current border-0 font-xssss text-white fw-600 ls-md text-uppercase float-right w175 p-3"
                    >
                      Next
                    </a>
                  </div>
                </div>
              </div>

              <div className="member-3" style={{ display: "none" }}>
                <div className="card dark-card bg-white shadow-xs p-4 text-center border-0">
                  <div className="card-body">
                    <i className="ti-check btn-round-xxxl text-white bg-success display3-size mt-5 shadow-lg"></i>
                    <h2 className="fw-900 display1-size mb-2 lh-3 mt-4">
                      Done{" "}
                    </h2>
                    <p className="font-xsss text-grey-500 pl-3 pr-3">
                      We con't seem to find the page you are looking for...
                    </p>
                    <a
                      href="home-1.html"
                      className="mt-3 mb-5 border-0 w200 bg-current pt-2 pb-2 lh-32 text-white fw-600 rounded-lg d-inline-block btn-light font-xsss ls-3 text-uppercase"
                    >
                      Continue
                    </a>
                  </div>
                </div>
                <div className="card w-100 bg-greylight shadow-none rounded-lg border-0 mt-3">
                  <div className="card-body w-100 p-4 border-0">
                    <h4 className="mb-0 float-left font-xssss text-grey-700 mt-1 fw-300 mb-0">
                      <i className="ti-reload text-success mr-2"></i> 100%
                      Secure Payments Powered by Paytm
                    </h4>
                    <img
                      src="images/payment-logo.png"
                      alt="icon"
                      className="float-right w250"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 pl-md--2">
                <a href="#" className="d-none d-lg-block"><img src="images/ad-banner-4.png" alt="ad-banner" className="rounded-lg img-fluid"/></a>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderAirtimePage;
