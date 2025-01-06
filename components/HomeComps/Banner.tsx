import { validateAirtimeOrder } from "@/utilities/validations/airtimeValidations";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";
import Toast from "../Universal/Toast";
import { ICurrentOrder } from "@/utilities/typings";
import { addCurrentOrder } from "@/redux/slices/orderSlice";
import { useRouter } from "next/router";
import { useAppDispatch } from "@/redux/store";

const BannerComp = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [formData, setFormData] = useState({
    phoneNumber: "",
    amount: "",
    email: "",
    operator: "",
    planType: "Prepaid",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePlanChange = (e: any) => {
    setFormData({
      ...formData,
      planType: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);

    const result = validateAirtimeOrder(formData);

    if (result.errLength) {
      return toast.error(() => <Toast title="Error" body={result.errMsg} />);
    }

    const payload: ICurrentOrder = {
      country: "ng",
      customer_id: formData?.phoneNumber,
      amount: formData?.amount,
      currency: "NGN",
      serviceName: formData?.operator,
      userName: "string",
      billerCode: "currentService?.billerCode",
      itemCode: "currentService?.itemCode",
      type: "string",
      biller_name: "currentService?.billerName",
      callback_url: "string",
      meta: {
        tax_type: "string",
        tax_period: "string",
      },
      userEmail: formData?.email,
      phoneNumber: formData?.phoneNumber,
    };

    console.log({ payload });

    dispatch(addCurrentOrder(payload));
    router.push("/bills/airtime/summary");
  };

  return (
    <div
      className="banner-wrapper style1 bg-image-contain"
      style={{ backgroundImage: `url('/images/banner-illu.jpg')` }}
    >
      <div className="tab-wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 tab-container">
              <nav className="d-lg-block d-none pt-3">
                <div
                  className="nav nav-tabs border-0 nav-fill"
                  id="nav-tab"
                  role="tablist"
                >
                  <Link
                    className="shrink nav-item nav-link rounded-lg border-0 p-4 mr-2  bg-current"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="/bills/airtime/select"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    <i className="font-xxl ti-mobile text-current d-block mt-2"></i>
                    <h4 className="font-xssss fw-600 text-grey-900 mt-3">
                      Airtime
                    </h4>
                  </Link>

                  <Link
                    className="shrink nav-item nav-link rounded-lg border-0 p-4 mr-2"
                    id="nav-profile-tab"
                    data-toggle="tab"
                    href="/bills/data/select"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    <i className="font-xxl ti-signal text-current d-block mt-2"></i>
                    <h4 className="font-xssss fw-600 text-grey-900 mt-3">
                      Data
                    </h4>
                  </Link>

                  <Link
                    className="shrink nav-item nav-link rounded-lg border-0 p-4 mr-2"
                    id="nav-contact-tab"
                    data-toggle="tab"
                    href="/bills/cable-tv/select"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    <i className="font-xxl ti-desktop text-current d-block mt-2"></i>
                    <h4 className="font-xssss fw-600 text-grey-900 mt-3">
                      Cable TV
                    </h4>
                  </Link>

                  <Link
                    className="shrink nav-item nav-link rounded-lg border-0 p-4 mr-2"
                    id="nav-about-tab"
                    data-toggle="tab"
                    href="/bills/electricity/select"
                    role="tab"
                    aria-controls="nav-about"
                    aria-selected="false"
                  >
                    <i className="font-xxl ti-bolt text-current d-block mt-2"></i>
                    <h4 className="font-xssss fw-600 text-grey-900 mt-3">
                      Electricity
                    </h4>
                  </Link>

                  <a
                    className="shrink nav-item nav-link rounded-lg border-0 p-4 mr-2"
                    id="nav-shoping-tab"
                    data-toggle="tab"
                    href="#nav-profile"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    <i className="font-xxl ti-medall text-current d-block mt-2"></i>
                    <h4 className="font-xssss fw-600 text-grey-900 mt-3">
                      Betting
                    </h4>
                  </a>

                  <a
                    className="shrink nav-item nav-link rounded-lg border-0 p-4 mr-2"
                    id="nav-haeddisk-tab"
                    data-toggle="tab"
                    href="#nav-about"
                    role="tab"
                    aria-controls="nav-about"
                    aria-selected="false"
                  >
                    <i className="font-xxl ti-book text-current d-block mt-2"></i>
                    <h4 className="font-xssss fw-600 text-grey-900 mt-3">
                      Education
                    </h4>
                  </a>
                  <Link
                    className="shrink nav-item nav-link rounded-lg border-0 p-4 mr-2"
                    id="nav-haeddisk-tab"
                    data-toggle="tab"
                    href="/coming-soon"
                    role="tab"
                    aria-controls="nav-about"
                    aria-selected="false"
                  >
                    <i className="font-xxl ti-book text-current d-block mt-2"></i>
                    <h4 className="font-xssss fw-600 text-grey-900 mt-3">
                      Decorders & Inverters
                    </h4>
                  </Link>

                  <a
                    className="shrink nav-item nav-link rounded-lg border-0 p-4 mr-0"
                    id="nav-tab-tab"
                    data-toggle="tab"
                    href="#nav-contact"
                    role="tab"
                    aria-controls="nav-contact"
                    aria-selected="false"
                  >
                    <i className="font-xxl ti-menu-alt text-current d-block mt-2"></i>
                    <h4 className="font-xssss fw-600 text-grey-900 mt-3">
                      More
                    </h4>
                  </a>
                </div>
              </nav>

              <div
                className="tab-content rounded-lg  bg-blur p-3 mt-2"
                id="nav-tabContent"
              >
                <div className="bg-white shadow-xs rounded-lg ml-4 mr-4 d-none d-block-md">
                  <a
                    href="#"
                    className="dash-menu d-none d-block-md fw-700 p-3 text-current font-xsss ls-3 "
                  >
                    {" "}
                    BROWSE CATEGORIES{" "}
                    <i className="ti-menu float-right font-xss mt-1"></i>
                  </a>
                  <ul className="tab-ul">
                    <li>
                      <a
                        href="#"
                        className="bg-white p-3 border-bottom-light w-100 fw-700 text-grey-700 font-xsss d-inline-block"
                      >
                        <i className="ti-mobile font-md float-left mr-3"></i>{" "}
                        Postpaid Rechagre{" "}
                        <i className="ti-angle-right float-right text-grey-400 mt-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"
                      >
                        <i className="ti-plug font-md float-left mr-3"></i>{" "}
                        Electicity Rechagre{" "}
                        <i className="ti-angle-right float-right text-grey-400 mt-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"
                      >
                        <i className="ti-pie-chart font-md float-left mr-3"></i>{" "}
                        DTH Rechagre{" "}
                        <i className="ti-angle-right float-right text-grey-400 mt-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"
                      >
                        <i className="ti-stats-up font-md float-left mr-3"></i>{" "}
                        Share Market{" "}
                        <i className="ti-angle-right float-right text-grey-400 mt-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"
                      >
                        <i className="ti-harddrives font-md float-left mr-3"></i>{" "}
                        Broadband Rechagre{" "}
                        <i className="ti-angle-right float-right text-grey-400 mt-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"
                      >
                        <i className="ti-game font-md float-left mr-3"></i> Game
                        Download{" "}
                        <i className="ti-angle-right float-right text-grey-400 mt-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"
                      >
                        <i className="ti-wallet font-md float-left mr-3"></i>{" "}
                        Pay loan{" "}
                        <i className="ti-angle-right float-right text-grey-400 mt-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"
                      >
                        <i className="ti-credit-card font-md float-left mr-3"></i>{" "}
                        Credit Card{" "}
                        <i className="ti-angle-right float-right text-grey-400 mt-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-white p-3 border-bottom-light w-100 fw-600 text-grey-500 font-xsss d-inline-block"
                      >
                        <i className="ti-video-clapper font-md float-left mr-3"></i>{" "}
                        Book Movie{" "}
                        <i className="ti-angle-right float-right text-grey-400 mt-1"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="bg-white p-3 w-100 fw-600 text-grey-500 font-xsss d-inline-block"
                      >
                        <i className="ti-package font-md float-left mr-3"></i>{" "}
                        More{" "}
                        <i className="ti-angle-right float-right text-grey-400 mt-1"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                {/* Airtime Form */}
                <div
                  className="tab-pane p-4 fade show active"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-sm-12 mb-2">
                        <h4 className="fw-700 font-xl">Quick Airtime</h4>
                      </div>

                      <div className="col-sm-12 mb-4">
                        <div className="custom-control mr-4 custom-radio custom-control-inline">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="customRadio"
                            name="planType"
                            value="Prepaid"
                            checked={formData.planType === "Prepaid"}
                            onChange={handlePlanChange}
                          />
                          <label
                            className="custom-control-label small-size fw-500 text-grey-900 font-xsss"
                            htmlFor="customRadio"
                          >
                            Prepaid
                          </label>
                        </div>
                        <div className="custom-control mr-0 custom-radio custom-control-inline">
                          <input
                            type="radio"
                            className="custom-control-input"
                            id="customRadio2"
                            name="planType"
                            value="Postpaid"
                            checked={formData.planType === "Postpaid"}
                            onChange={handlePlanChange}
                          />
                          <label
                            className="custom-control-label small-size fw-500 text-grey-900 font-xsss"
                            htmlFor="customRadio2"
                          >
                            Postpaid
                          </label>
                        </div>
                      </div>

                      <div className="col-sm-3">
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Enter 11 digit Mobile Number"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="col-sm-3">
                        <select
                          className="form-control mb-2"
                          name="operator"
                          value={formData.operator}
                          onChange={handleInputChange}
                        >
                          <option value="">Select Operator</option>
                          <option value="MTN">MTN</option>
                          <option value="9mobile">9mobile</option>
                          <option value="Glo">Glo</option>
                          <option value="Airtel">Airtel</option>
                        </select>
                      </div>

                      <div className="col-sm-3">
                        <input
                          type="text"
                          className="form-control mb-2"
                          placeholder="Amount"
                          name="amount"
                          value={formData.amount}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="col-sm-3">
                        <button
                          type="submit"
                          className="bg-current border-0 w-100 form-bttn fw-500 rounded-lg text-white"
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
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

export default BannerComp;
