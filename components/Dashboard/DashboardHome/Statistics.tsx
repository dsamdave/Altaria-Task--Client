import { IAnalyticsDetails } from '@/pages/dashboard/hospitaldb/homedb'
import Image from 'next/image'
import React from 'react'

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
       <Image src={'/chart.png'} width={1512} height={407} alt='Chart' className='mt-10' />
  </div>
  )
}

export default Statistics