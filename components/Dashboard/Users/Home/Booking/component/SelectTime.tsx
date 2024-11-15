// components/SelectTime.js
// @ts-nocheck
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import default styles for date picker
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import dayjs from "dayjs";
import { generateTimeSlots } from "@/utilities";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addAppointmentPayload } from "@/redux/slices/appointmentSlice";

interface SelectTimeProps {
  onAppointmentType: () => void;
}

const SelectTime: React.FC<SelectTimeProps> = ({ onAppointmentType }) => {
  
  
  const dispatch = useDispatch();

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const [selectedTimeIndex, setSelectedTimeIndex] = useState(null);
  const [time, setTime] = useState("");

  // const [datee] = useState(dayjs());
  const [datee, setDatee] = useState(dayjs());
  const [date, setDate] = useState('');

  const timeData = generateTimeSlots(8, 21);

  const times = [
    "03:30 PM - 04:00 PM",
    "04:00 PM - 04:30 PM",
    "04:30 PM - 05:00 PM",
    "08:00 PM - 08:30 PM",
  ];

  const handleDateChange = (selectedDate) => {
    const newDate = dayjs(selectedDate);
    setDatee(newDate);
    setDate(newDate.toISOString());
  };

  const handleTimeSelect = (time) => {
    setSelectedTime((prevTime) => (prevTime === time ? null : time));
  };

  const handleSelectTime = (index) => {
    setSelectedTimeIndex(index);
    setTime(timeData[index]);
  };

  const rows = [];
  for (let i = 0; i < timeData.length; i += 3) {
    rows.push(timeData.slice(i, i + 3));
  }

  console.log({datee, date})

  const handleSubmit = () => {
    if (!date) {
      return toast.error("Please select a date.");
    }
    if (!time) {
      return toast.error("Please select a time.");
    }

    dispatch(addAppointmentPayload({ date, time }));
    // setAppointmentType(!appointmentType);
    onAppointmentType()
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg space-y-6 shadow-sm">
      {/* Step 1: Select Visit Time */}
      <div>
        <h2 className="text-sm font-semibold text-gray-600">Step 1 of 3</h2>
        <h3 className="text-2xl font-bold">Select Visit Time</h3>

        {/* Date Selection */}
        <div className="mt-4">
          <div className="flex justify-center items-center ">
            <Calendar
              onChange={handleDateChange}
              value={datee.toDate()}
              tileClassName={({ date }) =>
                selectedDate &&
                date.toDateString() === selectedDate.toDateString()
                  ? "bg-blue-500 text-white rounded-full"
                  : "text-black"
              }
              next2Label={null} // Hide double navigation buttons
              prev2Label={null}
              className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg"
              navigationLabel={({ label }) => (
                <span className="text-lg font-semibold text-blue-500">
                  {label}
                </span>
              )}
              nextLabel={<button className="text-blue-500">&gt;</button>}
              prevLabel={<button className="text-blue-500">&lt;</button>}
            />
          </div>

          {/* <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            renderCustomHeader={({ date, decreaseMonth, increaseMonth }) => (
              <div className="flex justify-between items-center mb-2">
                <button onClick={decreaseMonth} className="text-gray-600 hover:text-gray-800 ">
                  {"<"}
                </button>
                <span className="font-medium text-gray-800">
                  {date.toLocaleString("default", { month: "long", year: "numeric" })}
                </span>
                <button onClick={increaseMonth} className="text-gray-600 hover:text-gray-800">
                  {">"}
                </button>
              </div>
            )}
          /> */}
        </div>
      </div>


      <div style={{ marginBottom: '30px' }}>
        <p style={{ fontSize: '18px', fontWeight: 'bold', color: "black" }}>
          {datee.format('dddd, D MMMM, YYYY')}
          {/* {selectedDate} */}
        </p>
        <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '30px', color: "black" }}>
          {time}
        </p>
      </div>

      {/* Available Times */}

      <div style={{ display: "flex", flexDirection: "column" }}>
        {rows.map((row, rowIndex) => (
          <div
            key={rowIndex}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            {row.map((time, index) => {
              const actualIndex = rowIndex * 3 + index;
              return (
                <button
                  key={actualIndex}
                  onClick={() => handleSelectTime(actualIndex)}
                  style={{
                    flex: 1,
                    margin: "0 5px",
                    padding: "10px",
                    borderWidth:
                      selectedTimeIndex === actualIndex ? "2px" : "1px",
                    borderColor:
                      selectedTimeIndex === actualIndex ? "#0364FF" : "#ccc",
                    borderRadius: "5px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <span style={{ fontSize: "16px", color: "black" }}>
                    {time}
                  </span>
                  <div
                    style={{
                      width: "16px",
                      height: "16px",
                      borderRadius: "50%",
                      border:
                        selectedTimeIndex === actualIndex
                          ? "none"
                          : "1px solid #ccc",
                      backgroundColor:
                        selectedTimeIndex === actualIndex
                          ? "#0364FF"
                          : "transparent",
                      marginTop: "5px",
                    }}
                  >
                    {selectedTimeIndex === actualIndex && (
                      <img
                        src="/tick-icon.png"
                        alt="Selected"
                        style={{ width: "16px", height: "16px" }}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* <div>
        <h4 className="text-lg font-medium mt-4">{selectedDate.toDateString()}</h4>
        <div className="space-y-2 mt-2">
          {times.map((time) => (
            <label
              key={time}
              className="flex items-center space-x-2 p-2 "
            >
              <input
                type="checkbox"
                checked={selectedTime === time}
                onChange={() => handleTimeSelect(time)}
                className="form-checkbox text-blue-500"
              />
              <span className="text-sm text-black">{time}</span>
            </label>
          ))}
        </div>
      </div> */}

      <button
        className="shrink w-full bg-blue-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center"
        onClick={handleSubmit}
      >
        Continue
        <span className="ml-2">→</span>
      </button>
    </div>
  );
};

export default SelectTime;
