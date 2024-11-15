import Image from "next/image";
import React, { useState } from "react";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import stripePromise from "@/utilities/stripeClient";
import Spinner from "../Universal/Spinner";
import { toast } from "react-toastify";
import { postBookingRequest } from "@/utilities/actions/bookingActions";
import { useAppSelector } from "@/redux/store";
import SentSuccessful from "../Dashboard/Users/Home/Booking/component/SentSuccessful";

const cardElementOptions = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Roboto", sans-serif',
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
    },
  },
};

interface IProp {
  onClose: () => void;
}

const PaymentForm: React.FC<IProp> = ({ onClose }) => {

  const { currentAppointmentPayload } = useAppSelector(
    (state) => state.appointment
  );

  const { currentUser } = useAppSelector(
    (state) => state.auth
  );
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(5000); // Amount in cents
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const [cardType, setCardType] = useState(0);
  const cardTypeData = [
    {
      imgSrc: "/co2.png",
      cardName: "Credit Card",
    },
    {
      imgSrc: "/co5.png",
      cardName: "Master Cared",
    },
    {
      imgSrc: "/stripeee.png",
      cardName: "Stripe Pay",
    },
  ];

  const submitBooking = async () => {
    // setLoading(true);
    if (!currentAppointmentPayload && !currentUser?.accessToken) {
      return setLoading(false);
    }

    console.log({ currentAppointmentPayload });

    const payload = {
      category:
        currentAppointmentPayload?.forSomeOne === true ? "someone" : "personal",
      patientName: `${currentAppointmentPayload?.firstName} ${currentAppointmentPayload?.lastName}`,
      ...currentAppointmentPayload,
    };

    // console.log({payload})
    const response = await postBookingRequest(
      "appointments",
      payload,
      currentUser?.accessToken
    );

    // console.log({response})

    if (response?.message === "Successful") {
      toast.success("Appointment booking successful!");
      setSuccess(true)
      setLoading(false);
    } else {
      toast.error("Appointment booking failed.");
      setLoading(false);
    }
  }; 


  const handlePayment = async () => {
    if (!stripe || !elements) {
      setStatus("Stripe has not loaded");
      return;
    }

    try {
      // Step 1: Create payment intent on the server
      setLoading(true);
      const res = await fetch("/api/stripe/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          currency: "eur",
          email,
          tx_ref: `expatdoc-trans-${Date.now()}`,
        }),
      });

      const { clientSecret } = await res.json();

      if (!clientSecret) {
        setStatus("Error fetching client secret");
        return setLoading(false);
      }

      // Step 2: Confirm payment using `useConfirmPayment`
      const cardElement = elements.getElement(CardElement);
      const paymentResult = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement!,
          billing_details: { email },
        },
      });

      if (paymentResult.error) {
        setStatus("Payment failed");
        setLoading(false);
        console.error(paymentResult.error.message);
      } else if (paymentResult.paymentIntent?.status === "succeeded") {
        setStatus("Payment successful");
        // Optionally verify the payment on the server
        await verifyPaymentOnServer(paymentResult.paymentIntent.id);
      } else {
        setStatus("Payment status unclear");
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setStatus("Error processing payment");
      setLoading(false);
    }
  };

  const verifyPaymentOnServer = async (paymentIntentId: string) => {
    try {
      const verifyRes = await fetch("/api/stripe/verify-payment", {
        method: "POST", // Matches the API route
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentIntentId }),
      });
  
      const result = await verifyRes.json();
      if (result.status === "success") {
        setStatus("Payment verified successfully");
        toast.success("Payment was successful")
        // setLoading(false);
        submitBooking()
      } else if (result.status === "pending") {
        setStatus("Payment is still pending");
        toast.error("payment is pending")
        setLoading(false);
      } else {
        setStatus("Payment verification failed");
        toast.error("Payment failed")
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setStatus("Error verifying payment");
      setLoading(false);
    }
  };
  

  return (

    <>{
      success ? (
        <SentSuccessful onClose={onClose}/>

      ) : (

    <div>
      <div className=" p-2 rounded-lg mb-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1">
            <Image src={"/stripee.png"} width={50} height={50} alt="icon" />
            <p className="text-sm text-[#1E1F20] font-normal">Stripe Payment</p>
          </div>
          <span className="text-sm font-bold text-[#1E1F20]">
            € {amount / 100}
          </span>
        </div>
        {/* <p className="text-[#9393AA] text-xs mt-1 text-right">
            100% Satisfaction Guarantee
          </p> */}
      </div>
      <div className="flex items-center  justify-between  sm:px-2 my-10">
        {cardTypeData.map((data, index) => (
          <div
            key={index}
            className={`w-[65px] sm:w-[72px]} `}
            onClick={() => setCardType(index)}
          >
            <div
              className={`w-[65px] h-[65px] sm:w-[72px] sm:h-[72px] border border-[#E0E0E0] flex items-center justify-center rounded-2xl ${
                cardType === index ? "bg-[#1DA1F2]" : ""
              }`}
            >
              <Image
                src={data.imgSrc}
                width={index === 2 ? 50 : 30}
                height={index === 2 ? 50 : 30}
                alt="Images"
              />
            </div>

            <p
              className={`text-[10px] sm:text-xs text-center ${
                cardType === index
                  ? "font-bold text-[#1E1F20]"
                  : "text-[#9393AA]"
              }`}
            >
              {data.cardName}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 mb-5">
        {/* <label className="block text-sm font-medium text-gray-700">
          Email
        </label> */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-500"
        />
      </div>

      <div className="card-input">
        <CardElement options={cardElementOptions} />
      </div>
      {/* <button onClick={handlePayment} disabled={!stripe} className="pay-button">
        Pay
      </button> */}
      <button
        className="shrink bg-[#0364FF] text-white p-2 sm:p-3 w-full rounded-xl font-semibold flex items-center justify-center gap-2 mt-8"
        onClick={handlePayment}
        disabled={!stripe}
      >
        <Image src={"/co6.png"} width={24} height={24} alt="icon" />
        Pay ${amount / 100}
      </button>
      <p>Status: {status}</p>

      <div className="w-full sm:w-[300px] mx-auto bg-white rounded-xl  overflow-hidden md:max-w-2xl p-2 "></div>

      <style jsx>{`
        .payment-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          padding: 20px;
          max-width: 400px;
          margin: auto;
        }
        .email-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
        }
        .card-input {
          width: 100%;
          padding: 12px;
          border: 1px solid #ccc;
          border-radius: 5px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          font-size: 16px;
        }
        .pay-button {
          padding: 12px 20px;
          background-color: #6772e5;
          color: #fff;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          font-size: 16px;
        }
        .pay-button:hover {
          background-color: #5469d4;
        }
      `}</style>

      {loading && <Spinner />}

    </div>
      )
    }
    </>
  );
};

export default PaymentForm;
