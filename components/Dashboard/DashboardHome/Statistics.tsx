import { IAnalyticsDetails } from '@/pages/dashboard/hospitaldb/homedb'
import Image from 'next/image'
import React from 'react'
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from "chart.js";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );


interface IProp {
    analytics: IAnalyticsDetails | undefined 
}

const Statistics: React.FC<IProp> = ({ analytics }) => {
    const statData = [
        {
            number: analytics?.totalPatients,
            type: 'Total Patients',
            iconSrc: '/new-p.png'
        },
        {
            number: analytics?.totalDoctors,
            type: 'Total Doctors',
            iconSrc: '/doc.png'
        },
        {
            number: analytics?.totalFreeHealthQuestions,
            type: 'Health Questions',
            iconSrc: '/op.png'
        },
        {
            number: analytics?.totalAppointments,
            type: 'Appointments',
            iconSrc: '/income.png'
        },
    ]


    const data = {
        labels: analytics?.appointments?.labels,
        datasets: [
            {
              label: "Concluded",
              data: analytics?.appointments?.concludedCounts, 
              borderColor: "rgba(34, 197, 94, 1)", // Green color
              backgroundColor: "rgba(34, 197, 94, 0.2)",
              fill: true,
              tension: 0.4,
            },
          {
            label: "Accepted",
            data: analytics?.appointments?.acceptedCounts, 
            borderColor: "#1E2230",
            backgroundColor: "rgba(34, 197, 94, 0.2)",
            fill: true,
            tension: 0.4,
          },
          {
            label: "Declined",
            data: analytics?.appointments?.declinedCounts, 
            borderColor: "rgba(239, 68, 68, 1)", // Red color
            backgroundColor: "rgba(239, 68, 68, 0.2)",
            fill: true,
            tension: 0.4,
          },
        ],
      };
    
      const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "bottom" as const, // Add 'as const' to ensure the type is literal "bottom"
          },
          tooltip: {
            mode: "index" as const,
            intersect: false,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Months",
            },
          },
          y: {
            title: {
              display: true,
              text: "Count",
            },
            beginAtZero: true,
          },
        },
      };
      



  return (
  <div>
      <div className='flex items-center justify-between'>
       {statData.map((data, index)=>(
         <div key={index} className='cursor-pointer shrink w-[220px] bg-white rounded-[15px] flex items-center justify-between p-4 shadow-2xl'>
         <p className='text-3xl text-[#1B1B29] font-bold'>
        {data.number} <br />
        <span className='text-sm text-[#1B1B29] font-normal'>{data.type}</span>
         </p>
         <Image src={`${data.iconSrc}`} width={60} height={60} alt='Icon db' />
     </div>
       ))}

    </div>
       {/* <Image src={'/chart.png'} width={1512} height={407} alt='Chart' className='mt-10' /> */}

       <div className="mt-10 bg-white rounded-md">
        <h1 className="text-[22px] font-semibold text-[#1B1B29] p-5 ">Patient Appointment Status</h1>
        <Line data={data} options={options} />
      </div>
  </div>
  )
}

export default Statistics