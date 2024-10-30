import React, { useEffect, useState } from "react";

const notification = () => {
  const notificationData = [
    {
      notification: "Lorem Ispum",
      description: "Receive a notification for every successful payment.",
    },
    {
      notification: "Logistic fees",
      description: "Receive a notification each time logistic is made",
    },
    {
      notification: "Disputes",
      description: "Receive a notification if a payment is disputed ",
    },
    {
      notification: "Payment reviews",
      description:
        "Receive a notification if a payment is marked and validated by the account",
    },
    {
      notification: "Mentions",
      description:
        "Receive a notification if a teammate mentions you in a note.",
    },
    {
      notification: "Invoice mispayments",
      description:
        "Receive a notification if a patient sends an incorrect amount to pay their invoice.",
    },
    {
      notification: "Webhooks",
      description: "Receive a notification if a webhook is failing.",
    },
    {
      notification: "Bank accounts",
      description:
        "Receive a notification for important changes to your bank accounts or for micro-deposit verification related events.",
    },
    {
      notification: "Mention",
      description:
        "Receive a notification if  ministry send a message or micro-deposit verification related events.",
    },
  ];
  const [toggleClasses, setToggleClasses] = useState(
    Array(notificationData.length).fill(false)
  );

  const handleToggleClasses = (index: number) => {
    setToggleClasses((prev) =>
      prev.map((toggle, i) => (i === index ? !toggle : toggle))
    );
  };

  return (
    <div className="p-5 bg-[#ECF0FF] h-full ">
    <div className="bg-white p-8">
        <h1 className="text-[22px] text-[#1B1B29] font-semibold mb-3">Notification</h1>
    {notificationData.map((data, index) => (
        <div
          key={index}
          className="flex items-center justify-between border-t border-gray-100 pt-2.5 w-full "
        >
          <div>
            <h1 className="text-lg text-[#0F1222] font-normal">
              {data.notification}
            </h1>
            <p className="text-base text-[#535875] font-light">
              {data.description}
            </p>
          </div>
          {/* Toggle button */}

          <button
            className={`w-[58px] h-6 ${
              toggleClasses[index]
                ? "bg-[#10BFD8] flex items-center justify-end"
                : "bg-[#F2F2F2] flex items-center justify-start"
            } rounded-full py-1 px-0.5 `}
            onClick={() => handleToggleClasses(index)}
          >
            <div className={`w-[26px] h-[20px] ${toggleClasses[index] ? 'toggle' : 'bg-white shadow-lg'}  rounded-full `} />
          </button>

          {/* Toggle button ends */}
        </div>
      ))}
    </div>
    </div>
  );
};

export default notification;
