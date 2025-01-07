"use Client";

import SideBarComp from "@/components/Universal/SideBarComp";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { validateAirtimeOrder, validateElectricityOrder } from "@/utilities/validations/airtimeValidations";
import { toast } from "react-toastify";
import Toast from "@/components/Universal/Toast";
import { addCurrentOrder } from "@/redux/slices/orderSlice";
import { ICurrentOrder } from "@/utilities/typings";
import {
  BeninDisco,
  EkoDisco,
  EnuguDisco,
  IbadanDisco,
  IkejaDisco,
  KadunaDisco,
  KanoDisco,
  PHEDDisco,
  YolaDisco,
} from "./select";

const OrderPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { currentService } = useAppSelector((state) => state.selectedService);
  const [isClient, setIsClient] = useState(false);
  const [formData, setFormData] = useState({
    phoneNumber: "",
    amount: "",
    email: "",
    meterNumber: "",
    meterType: "PREPAID"
  });

  let logoSrc = "";
  switch (currentService?.serviceName) {
    case "BENIN ELECTRIC BILLS":
      logoSrc = BeninDisco;
      break;
    case "EKO ELECTRIC BILLS":
      logoSrc = EkoDisco;
      break;
    case "ENUGU ELECTRIC BILLS":
      logoSrc = EnuguDisco;
      break;
    case "IBADAN ELECTRIC BILLS":
      logoSrc = IbadanDisco;
      break;
    case "IKEJA ELECTRIC BILLS":
      logoSrc = IkejaDisco;
      break;
    case "KADUNA ELECTRIC BILLS":
      logoSrc = KadunaDisco;
      break;
    case "KANO ELECTRIC BILLS":
      logoSrc = KanoDisco;
      break;
    case "PORT HARCOURT ELECTRIC BILLS":
      logoSrc = PHEDDisco;
      break;
    case "YOLA ELECTRIC BILLS":
      logoSrc = YolaDisco;
      break;
    default:
      logoSrc = "";
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);

    const result = validateElectricityOrder(formData);

    if (result.errLength) {
      return toast.error(() => <Toast title="Error" body={result.errMsg} />);
    }

    const payload: ICurrentOrder = {
      country: currentService?.country,
      customer_id: formData?.meterNumber,
      amount: formData?.amount,
      currency: currentService?.currency,
      serviceName: currentService?.serviceName,
      productName: formData?.meterType,
      userName: "string",
      billerCode: currentService?.billerCode,
      itemCode: currentService?.itemCode,
      type: "string",
      biller_name: currentService?.billerName,
      callback_url: "string",
      meta: {
        tax_type: "string",
        tax_period: "string",
      },
      userEmail: formData?.email,
      phoneNumber: formData?.phoneNumber,
    };

    dispatch(addCurrentOrder(payload));
    router.push("/bills/electricity/summary");
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
        <div
          className="open-font main-wrapper"
          style={{ paddingBottom: "100px" }}
        >
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
                              <div className="col-lg-6 col-md-6 mb-3 d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                  <Image
                                    src={logoSrc}
                                    alt="logo"
                                    layout="intrinsic"
                                    width={50}
                                    height={50}
                                    style={{
                                      objectFit: "contain",
                                      marginRight: "10px",
                                    }}
                                  />
                                  <h4 className="fw-700 font-l mb-0">
                                    {currentService?.serviceName}
                                  </h4>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 mb-3">
                        <div className="form-gorup">

                          <label
                            className="mont-font fw-500 font-xsss"
                            htmlFor="phoneNumber"
                          >
                            Meter Type
                          </label>{" "}
                          <span className="text-danger">*</span>
                          <select
                            className="form-control mb-3"
                            name="meterType"
                            value={formData.meterType}
                            onChange={handleInputChange}
                          >
                            {/* <option value="">Select Operator</option> */}
                            <option value="PREPAID">PREPAID</option>
                            <option value="POSTPAID">POSTPAID</option>
                          </select>
                        </div>
                        </div>

                        <div className="col-lg-6 mb-3">
                          <div className="form-gorup">
                            <label
                              className="mont-font fw-500 font-xsss"
                              htmlFor="meterNumber"
                            >
                              Meter Number
                            </label>{" "}
                            <span className="text-danger">*</span>
                            <input
                              type="number"
                              name="meterNumber"
                              value={formData.meterNumber}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Enter meter number"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-6 mb-3">
                          <div className="form-gorup">
                            <label
                              className="mont-font fw-500 font-xsss"
                              htmlFor="amount"
                            >
                              Amount
                            </label>{" "}
                            <span className="text-danger">*</span>
                            <input
                              type="number"
                              name="amount"
                              value={formData.amount}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Enter amount"
                            />
                          </div>
                        </div>

                        <div className="col-lg-6 mb-3">
                          <div className="form-gorup">
                            <label
                              className="mont-font fw-500 font-xsss"
                              htmlFor="email"
                            >
                              Email
                            </label>
                            <span className="text-danger">*</span>
                            <input
                              type="text"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Enter email"
                            />
                          </div>
                        </div>
                      </div>


                      <div className="row">
                        

                        <div className="col-lg-6 mb-3">
                          <div className="form-gorup">
                            <label
                              className="mont-font fw-500 font-xsss"
                              htmlFor="email"
                            >
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phoneNumber"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              className="form-control"
                              placeholder="Enter 11-digits Phone number"
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
      ) : null}
    </>
  );
};

export default OrderPage;
