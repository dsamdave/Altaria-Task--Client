import SideBarComp from "@/components/Universal/SideBarComp";
import { useAppSelector } from "@/redux/store";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import { useApiMutation } from "@/lib/useApi";
import Toast from "@/components/Universal/Toast";
import Spinner from "@/components/Universal/Spinner";
import { capitalizeEachWord } from "@/utilities";

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

interface IResponse {
  status: string;
  message: string;
  data: {
    link: string;
  };
}
interface IVerifyResponse {
  message: string;
  status: string;
}

export interface IPayload {
  amount: string | undefined;
  email: string | undefined;
  phoneNumber: string | undefined;
  serviceTitle: string | undefined;
  redirectURL: string;
}
export interface IVerifyPayload {
  transactionId: string | undefined;
}

const SummaryAirtimePage = () => {
  const router = useRouter();

  const { currentOrder } = useAppSelector((state) => state.currentOrder);
  const { currentService } = useAppSelector((state) => state.selectedService);

  const [isClient, setIsClient] = useState(false);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const initiatePayment = useApiMutation<IResponse, IPayload>(
    "/initiate-payment"
  );
  const verifyPayment = useApiMutation<IResponse, IVerifyPayload>(
    "/verify-transaction"
  );

  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedPaymentMethod(e.target.value);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (selectedPaymentMethod === "wallet") {
      console.log("Pay with Wallet");
      toast.error("Insufficient Wallet Balance!");
    } else {
      console.log("Pay with Card");
      await paymentGateway();
    }
  };

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

  const verifyTransaction = async (transactionId: string | null) => {
    if (!transactionId) {
      toast.error("No transaction ID found.");
      return;
    }

    try {
      verifyPayment.mutate(
        { transactionId },
        {
          onSuccess: (response: IResponse) => {
            if (response?.status === "success") {
              toast.success("Payment Successful!");
              sessionStorage.setItem("payment", "i");
              router.push("/bills/cable-tv/done");
            } else {
              toast.error("Payment Failed!");
            }
          },
          onError: (error: any) => {
            toast.error(() => (
              <Toast
                title="Payment failed:"
                body={error?.response?.data?.message || "Unknown error"}
              />
            ));
          },
        }
      );
    } catch (error) {
      console.error("Verification Error:", error);
      toast.error("An error occurred while verifying payment.");
    }
  };

  const paymentGateway = async () => {
    try {
      const payload = {
        amount: currentOrder?.amount,
        email: currentOrder?.userEmail || "virtualsavvy.nigeria@gmail.com",
        phoneNumber: currentOrder?.phoneNumber,
        serviceTitle: currentOrder?.serviceName,
        redirectURL: window.location.href,
      };

      initiatePayment.mutate(payload, {
        onSuccess: (response: IResponse) => {
          if (response.data?.link) {
            window.location.href = response.data.link;
          } else {
            toast.error("Unable to initiate payment.");
          }
        },
        onError: (error: any) => {
          toast.error(() => (
            <Toast
              title="Payment failed:"
              body={error?.response?.data?.message || "Unknown error"}
            />
          ));
        },
      });
    } catch (error) {
      console.error("Payment Gateway Error:", error);
      toast.error("An error occurred while initiating payment.");
    }
  };

  useEffect(() => {
    const { status, transaction_id } = router.query;

    if (status && transaction_id) {
      verifyTransaction(transaction_id as string);
    }
  }, [router.query]);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {isClient ? (
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
                              <h4 className="fw-700 font-xxl mb-0">
                                Order Summary
                              </h4>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="table-content table-responsive mb-5 card border-0 bg-greyblue p-5">
                      <table className="table order-table order-table-2 mb-0">
                        <tbody>
                          <tr>
                            <th className="text-grey-900 fw-900 font-xsss">
                              Meter Type
                            </th>
                            <td className="text-right text-grey-900 fw-500 font-xsss">
                              {currentOrder?.productName}
                            </td>
                          </tr>
                          <tr>
                            <th className="text-grey-900 fw-900 font-xsss">
                             Meter Number
                            </th>
                            <td className="text-right text-grey-900 fw-500 font-xsss">
                              {currentOrder?.customer_id}
                            </td>
                          </tr>
                          <tr>
                            <th className="text-grey-900 fw-900 font-xsss">
                              Phone Number
                            </th>
                            <td className="text-right text-grey-900 fw-500 font-xsss">
                              {currentOrder?.phoneNumber}
                            </td>
                          </tr>
                          <tr>
                            <th className="text-grey-900 fw-900 font-xsss">
                              Email
                            </th>
                            <td className="text-right text-grey-900 fw-500 font-xsss">
                              {capitalizeEachWord(currentOrder?.userEmail)}
                            </td>
                          </tr>
                          <tr>
                            <th className="text-grey-900 fw-900 font-xsss">
                              Customer
                            </th>
                            <td className="text-right text-grey-900 fw-500 font-xsss">
                              {/* {capitalizeEachWord(currentOrder?.userEmail)} */}
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr className="cart-subtotal">
                            <th className="text-grey-900 fw-900 font-xsss">
                              Subtotal
                            </th>
                            <td className="text-right text-grey-900 font-xss fw-500">
                              ₦
                              {Number(currentOrder?.amount).toLocaleString() ??
                                0}
                            </td>
                          </tr>
                          <tr className="shipping">
                            <th className="text-grey-900 fw-900 font-xsss">
                              Service Fee
                            </th>
                            <td className="text-right">
                              <span className="text-grey-900 font-xss fw-600">
                                ₦100
                              </span>
                            </td>
                          </tr>
                          <tr className="order-total">
                            <th>Order Total</th>
                            <td className="text-right text-grey-900 font-xss fw-600">
                              <span className="order-total-ammount">
                                ₦
                                {(
                                  Number(currentOrder?.amount) + 100
                                ).toLocaleString() ?? 0}
                              </span>
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                    <div className="checkout-payment card border-0 mb-3 bg-greyblue p-5">
                      <form onSubmit={handleSubmit} className="payment-form">
                        <div className="payment-group mb-4">
                          <div className="payment-radio">
                            <input
                              type="radio"
                              value="wallet"
                              name="payment-method"
                              id="wallet"
                              onChange={handlePaymentChange}
                            />
                            <label
                              className="payment-label fw-600 text-grey-900 ml-2"
                              htmlFor="wallet"
                            >
                              Pay With Wallet Balance
                            </label>
                          </div>
                          <div className="payment-info" data-method="wallet">
                            <p className="font-xsss text-grey-500 pl-4">
                              Use your wallet balance to complete this payment.
                              Ensure your wallet has sufficient funds to cover
                              the total order amount.
                            </p>
                          </div>
                        </div>

                        <div className="payment-group mb-4">
                          <div className="payment-radio">
                            <input
                              type="radio"
                              value="card"
                              name="payment-method"
                              id="card"
                              onChange={handlePaymentChange}
                            />
                            <label
                              className="payment-label fw-600 text-grey-900 ml-2"
                              htmlFor="card"
                            >
                              Direct Card Payment
                            </label>
                          </div>
                          <div className="payment-info" data-method="card">
                            <p className="font-xsss text-grey-500 pl-4">
                              Pay securely using your credit or debit card. Your
                              payment details are encrypted and protected by our
                              payment gateway.
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="clearfix"></div>

                    <div
                      className="shrink card shadow-none border-0"
                      onClick={handleSubmit}
                    >
                      <button className="btn w-100 p-3 mt-3 font-xsss text-center text-white bg-current rounded-lg text-uppercase fw-600 ls-3">
                        Pay ₦
                        {(
                          Number(currentOrder?.amount) + 100
                        ).toLocaleString() ?? 0}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {(initiatePayment.isPending || verifyPayment.isPending) && (
            <Spinner />
          )}
        </div>
      ) : null}
    </>
  );
};

export default SummaryAirtimePage;
