import SideBarComp from "@/components/Universal/SideBarComp";
import { useRouter } from "next/router";
import React from "react";

const SummaryAirtimePage = () => {

      const router = useRouter();
    
      const handleSubmit = async (e: any) => {
        e.preventDefault();
        router.push("/bills/airtime/done");
      };


  return (
    <div className="open-font main-wrapper">
      <div className="online bg-lightgrey-after pb-7 pt-3 position-relative">
        <div className="container">
          <div className="row">
            {/* Aside */}
            <SideBarComp />

            <div className="col-lg-9 pl-md--2 pr-md--2 mt-sm--3 bg-white p-4">
              <div className="order-details">
                
                <div className="payment-option bg-white">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-6 col-md-6 mb-3 text-left">
                            <i className="ti-shopping-cart text-grey-900 display1-size float-left mr-3"></i>
                            <h4 className="fw-700 font-xxl mb-3">
                              Order Summary
                            </h4>
                          </div>
                        </div>
                      </div>
                    </div>
                <div className="table-content table-responsive mb-5 card border-0 bg-greyblue p-5">
                  <table className="table order-table order-table-2 mb-0">
                    {/* <thead>
                      <tr>
                        <th className="border-0">Product/Sevice Name</th>
                       
                        <th className="text-right border-0">{" "}</th>
                      </tr>
                    </thead> */}
                    <tbody>
                      <tr>
                        <th className="text-grey-900 fw-900 font-xsss">
                         Phone Number
                          {/* <strong>
                            <span>✕</span>1
                          </strong> */}
                        </th>
                        <td className="text-right text-grey-900 fw-500 font-xsss">
                          N80.00
                        </td>
                      </tr>
                      <tr>
                        <th className="text-grey-900 fw-900 font-xsss">
                          Email
                          {/* <strong>
                            <span>✕</span>1
                          </strong> */}
                        </th>
                        <td className="text-right text-grey-900 fw-500 font-xsss">
                          example@gmail.com
                        </td>
                      </tr>
                     
                    </tbody>
                    <tfoot>
                      <tr className="cart-subtotal">
                        <th className="text-grey-900 fw-900 font-xsss">Subtotal</th>
                        <td className="text-right text-grey-900 font-xss fw-500">
                          N56.00
                        </td>
                      </tr>
                      <tr className="shipping">
                        <th className="text-grey-900 fw-900 font-xsss">Service Fee</th>
                        <td className="text-right">
                          <span className="text-grey-900 font-xss fw-600">
                            N0.00
                          </span>
                        </td>
                      </tr>
                      <tr className="order-total">
                        <th>Order Total</th>
                        <td className="text-right text-grey-900 font-xss fw-600">
                          <span className="order-total-ammount">$56.00</span>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="checkout-payment card border-0 mb-3 bg-greyblue p-5">

                  <form action="#" className="payment-form">
                    <div className="payment-group mb-4">
                      <div className="payment-radio">
                        <input
                          type="radio"
                          value="bank"
                          name="payment-method"
                          id="bank"
                        />
                        <label
                          className="payment-label fw-600 text-grey-900 ml-2"
                          htmlFor="cheque"
                        >
                          Pay With Wallet Balance
                        </label>
                      </div>
                      <div className="payment-info" data-method="bank">
                        <p className="font-xsss text-grey-500 pl-4">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                      </div>
                    </div>


                    <div className="payment-group mb-4">
                      <div className="payment-radio">
                        <input
                          type="radio"
                          value="bank"
                          name="payment-method"
                          id="bank"
                        />
                        <label
                          className="payment-label fw-600 text-grey-900 ml-2"
                          htmlFor="cheque"
                        >
                          Direct Card Payment
                        </label>
                      </div>
                      <div className="payment-info" data-method="bank">
                        <p className="font-xsss text-grey-500 pl-4">
                          Make your payment directly into our bank account.
                          Please use your Order ID as the payment reference.
                          Your order will not be shipped until the funds have
                          cleared in our account.
                        </p>
                      </div>
                    </div>

                   

                  </form>
                </div>
                <div className="clearfix"></div>

                <div className="shrink card shadow-none border-0"
                onClick={handleSubmit}
                >
                  <button className="btn w-100 p-3 mt-3 font-xsss text-center text-white bg-current rounded-lg text-uppercase fw-600 ls-3">
                    Pay N500
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryAirtimePage;
